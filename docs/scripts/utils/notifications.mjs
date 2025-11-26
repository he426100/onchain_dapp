/**
 * 通知系统 - 替代原生 alert
 * 提供 Toast 风格的用户反馈
 */

let toastContainer = null;
let toastIdCounter = 0;

/**
 * 初始化 Toast 容器
 */
function initToastContainer() {
  if (toastContainer) return;

  toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  toastContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
  `;
  document.body.appendChild(toastContainer);
}

/**
 * 创建 Toast 元素
 */
function createToastElement(message, type) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const colors = {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
    loading: '#6B7280',
  };

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
    loading: '⏳',
  };

  toast.style.cssText = `
    background: ${colors[type]};
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 300px;
    animation: slideIn 0.3s ease-out;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
  `;

  // 添加动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  if (!document.getElementById('toast-animations')) {
    style.id = 'toast-animations';
    document.head.appendChild(style);
  }

  const icon = document.createElement('span');
  icon.textContent = icons[type];
  icon.style.fontSize = '18px';

  const content = document.createElement('div');
  content.style.flex = '1';

  if (typeof message === 'string') {
    content.textContent = message;
  } else {
    content.appendChild(message);
  }

  toast.appendChild(icon);
  toast.appendChild(content);

  return toast;
}

/**
 * 显示 Toast
 */
function showToast(message, type, options = {}) {
  initToastContainer();

  const id = `toast-${++toastIdCounter}`;
  const toast = createToastElement(message, type);
  toast.id = id;

  // 点击关闭
  toast.addEventListener('click', () => {
    removeToast(id);
  });

  toastContainer.appendChild(toast);

  // 自动关闭
  if (options.duration !== 0) {
    const duration = options.duration || (type === 'loading' ? 0 : 3000);
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  }

  return id;
}

/**
 * 移除 Toast
 */
function removeToast(id) {
  const toast = document.getElementById(id);
  if (!toast) return;

  toast.style.animation = 'slideOut 0.3s ease-out';
  setTimeout(() => {
    toast.remove();
  }, 300);
}

/**
 * 通知 API
 */
export const notification = {
  success(message, options) {
    return showToast(message, 'success', options);
  },

  error(message, options) {
    return showToast(message, 'error', options);
  },

  warning(message, options) {
    return showToast(message, 'warning', options);
  },

  info(message, options) {
    return showToast(message, 'info', options);
  },

  loading(message, options) {
    return showToast(message, 'loading', { ...options, duration: 0 });
  },

  remove(id) {
    removeToast(id);
  },

  clear() {
    if (toastContainer) {
      toastContainer.innerHTML = '';
    }
  },
};

/**
 * 错误解析器
 */
export function parseError(error) {
  if (!error) return 'Unknown error';

  const message = error.message || error.toString();

  // 用户拒绝
  if (/user rejected/i.test(message) || /user denied/i.test(message)) {
    return '您取消了操作';
  }

  // 余额不足
  if (/insufficient funds/i.test(message) || /insufficient balance/i.test(message)) {
    return '余额不足，无法完成交易';
  }

  // 网络错误
  if (/network/i.test(message) || /fetch/i.test(message)) {
    return '网络错误，请检查连接后重试';
  }

  // Gas 估算失败
  if (/gas required exceeds/i.test(message)) {
    return 'Gas 费用过高，交易可能失败';
  }

  // 合约执行错误
  if (/execution reverted/i.test(message)) {
    const match = message.match(/execution reverted:?\s*(.+)/i);
    if (match) {
      return `合约错误: ${match[1]}`;
    }
    return '合约执行失败';
  }

  // Nonce 错误
  if (/nonce too low/i.test(message)) {
    return 'Nonce 错误，请重置钱包';
  }

  // 返回原始消息
  return message.length > 100 ? message.substring(0, 100) + '...' : message;
}

/**
 * 创建交易通知元素
 */
export function createTxNotification(message, explorerUrl) {
  const container = document.createElement('div');

  const text = document.createElement('div');
  text.textContent = message;
  container.appendChild(text);

  if (explorerUrl) {
    const link = document.createElement('a');
    link.href = explorerUrl;
    link.target = '_blank';
    link.textContent = '查看交易';
    link.style.cssText = `
      color: white;
      text-decoration: underline;
      display: block;
      margin-top: 4px;
      font-size: 12px;
    `;
    container.appendChild(link);
  }

  return container;
}
