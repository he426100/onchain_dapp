/**
 * Ethereum 连接状态管理器
 * 使用 wagmi + localStorage 持久化
 */

// 从 bundle.js 暴露的全局对象获取 wagmi
const { watchAccount, watchChainId } = window.wagmi.core;
import { wagmiConfig } from './wagmi-config.mjs';

class EthereumStateManager {
  constructor() {
    this.listeners = new Set();
    this.state = this.loadState();
    this.setupWatchers();
  }

  /**
   * 从 localStorage 加载状态
   */
  loadState() {
    try {
      const saved = localStorage.getItem('onchain_eth_state');
      return saved ? JSON.parse(saved) : this.getDefaultState();
    } catch (error) {
      console.error('Failed to load state:', error);
      return this.getDefaultState();
    }
  }

  /**
   * 默认状态
   */
  getDefaultState() {
    return {
      isConnected: false,
      address: null,
      chainId: null,
      connector: null,
      lastConnectedAt: null,
    };
  }

  /**
   * 保存状态到 localStorage
   */
  saveState() {
    try {
      localStorage.setItem('onchain_eth_state', JSON.stringify(this.state));
    } catch (error) {
      console.error('Failed to save state:', error);
    }
  }

  /**
   * 设置 wagmi 监听器
   */
  setupWatchers() {
    // 监听账户变化
    watchAccount(wagmiConfig, {
      onChange: (account) => {
        const wasConnected = this.state.isConnected;

        this.state = {
          isConnected: account.isConnected,
          address: account.address || null,
          chainId: account.chainId || null,
          connector: account.connector?.name || null,
          lastConnectedAt: account.isConnected ? Date.now() : this.state.lastConnectedAt,
        };

        this.saveState();

        // 触发事件
        if (!wasConnected && account.isConnected) {
          this.notify('connect', this.state);
        } else if (wasConnected && !account.isConnected) {
          this.notify('disconnect', this.state);
        } else if (account.address) {
          this.notify('accountChanged', this.state);
        }
      },
    });

    // 监听链变化
    watchChainId(wagmiConfig, {
      onChange: (chainId) => {
        if (this.state.chainId !== chainId) {
          this.state.chainId = chainId;
          this.saveState();
          this.notify('chainChanged', this.state);
        }
      },
    });
  }

  /**
   * 订阅状态变化
   */
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  /**
   * 通知所有监听器
   */
  notify(event, data) {
    this.listeners.forEach(callback => {
      try {
        callback(event, data);
      } catch (error) {
        console.error('Listener error:', error);
      }
    });
  }

  /**
   * 获取当前状态
   */
  getState() {
    return { ...this.state };
  }

  /**
   * 清除状态
   */
  clear() {
    this.state = this.getDefaultState();
    this.saveState();
    this.notify('clear', this.state);
  }
}

// 单例
export const stateManager = new EthereumStateManager();

// 便捷方法
export function getConnectionState() {
  return stateManager.getState();
}

export function subscribeToStateChanges(callback) {
  return stateManager.subscribe(callback);
}
