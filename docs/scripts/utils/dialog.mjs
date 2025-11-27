/**
 * 对话框系统 - 替代原生 prompt/confirm
 * 提供移动端友好的模态对话框
 */

/**
 * 创建遮罩层
 */
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease-out;
  `;
  return overlay;
}

/**
 * 创建对话框容器
 */
function createDialog() {
  const dialog = document.createElement('div');
  dialog.style.cssText = `
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    max-width: 90%;
    width: 400px;
    max-height: 80vh;
    overflow: auto;
    animation: slideUp 0.3s ease-out;
  `;
  return dialog;
}

/**
 * 添加动画样式
 */
function addAnimations() {
  if (document.getElementById('dialog-animations')) return;

  const style = document.createElement('style');
  style.id = 'dialog-animations';
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * 选择对话框 - 替代 prompt 用于选择列表
 * @param {string} title - 标题
 * @param {Array<{label: string, value: any}>} options - 选项列表
 * @param {string} cancelText - 取消按钮文本
 * @returns {Promise<any>} 返回选中的值，取消返回 null
 */
export function showSelectDialog(title, options, cancelText = '取消') {
  return new Promise((resolve) => {
    addAnimations();

    const overlay = createOverlay();
    const dialog = createDialog();

    // 标题
    const header = document.createElement('div');
    header.style.cssText = `
      padding: 20px;
      border-bottom: 1px solid #E5E7EB;
    `;
    header.innerHTML = `<h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #111827;">${title}</h3>`;

    // 选项列表
    const optionsContainer = document.createElement('div');
    optionsContainer.style.cssText = `
      padding: 10px 0;
      max-height: 400px;
      overflow-y: auto;
    `;

    options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.textContent = option.label;
      btn.style.cssText = `
        width: 100%;
        padding: 16px 20px;
        border: none;
        background: white;
        text-align: left;
        font-size: 15px;
        color: #374151;
        cursor: pointer;
        transition: background 0.2s;
        border-bottom: 1px solid #F3F4F6;
      `;

      btn.addEventListener('mouseenter', () => {
        btn.style.background = '#F9FAFB';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'white';
      });

      btn.addEventListener('click', () => {
        overlay.remove();
        resolve(option.value);
      });

      optionsContainer.appendChild(btn);
    });

    // 取消按钮
    const footer = document.createElement('div');
    footer.style.cssText = `
      padding: 16px 20px;
      border-top: 1px solid #E5E7EB;
    `;

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = cancelText;
    cancelBtn.style.cssText = `
      width: 100%;
      padding: 12px;
      border: 1px solid #D1D5DB;
      background: white;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      color: #6B7280;
      cursor: pointer;
      transition: all 0.2s;
    `;

    cancelBtn.addEventListener('mouseenter', () => {
      cancelBtn.style.background = '#F9FAFB';
      cancelBtn.style.borderColor = '#9CA3AF';
    });
    cancelBtn.addEventListener('mouseleave', () => {
      cancelBtn.style.background = 'white';
      cancelBtn.style.borderColor = '#D1D5DB';
    });

    cancelBtn.addEventListener('click', () => {
      overlay.remove();
      resolve(null);
    });

    footer.appendChild(cancelBtn);

    // 组装对话框
    dialog.appendChild(header);
    dialog.appendChild(optionsContainer);
    dialog.appendChild(footer);
    overlay.appendChild(dialog);

    // 点击遮罩关闭
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
        resolve(null);
      }
    });

    document.body.appendChild(overlay);
  });
}

/**
 * 确认对话框 - 替代 confirm
 * @param {string} message - 消息内容
 * @param {string} confirmText - 确认按钮文本
 * @param {string} cancelText - 取消按钮文本
 * @returns {Promise<boolean>} 确认返回 true，取消返回 false
 */
export function showConfirmDialog(message, confirmText = '确认', cancelText = '取消') {
  return new Promise((resolve) => {
    addAnimations();

    const overlay = createOverlay();
    const dialog = createDialog();

    // 内容
    const content = document.createElement('div');
    content.style.cssText = `
      padding: 24px 20px;
      font-size: 15px;
      line-height: 1.6;
      color: #374151;
      white-space: pre-wrap;
    `;
    content.textContent = message;

    // 按钮组
    const footer = document.createElement('div');
    footer.style.cssText = `
      padding: 16px 20px;
      display: flex;
      gap: 12px;
      border-top: 1px solid #E5E7EB;
    `;

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = cancelText;
    cancelBtn.style.cssText = `
      flex: 1;
      padding: 12px;
      border: 1px solid #D1D5DB;
      background: white;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      color: #6B7280;
      cursor: pointer;
      transition: all 0.2s;
    `;

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = confirmText;
    confirmBtn.style.cssText = `
      flex: 1;
      padding: 12px;
      border: none;
      background: #3B82F6;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      color: white;
      cursor: pointer;
      transition: all 0.2s;
    `;

    cancelBtn.addEventListener('mouseenter', () => {
      cancelBtn.style.background = '#F9FAFB';
    });
    cancelBtn.addEventListener('mouseleave', () => {
      cancelBtn.style.background = 'white';
    });

    confirmBtn.addEventListener('mouseenter', () => {
      confirmBtn.style.background = '#2563EB';
    });
    confirmBtn.addEventListener('mouseleave', () => {
      confirmBtn.style.background = '#3B82F6';
    });

    cancelBtn.addEventListener('click', () => {
      overlay.remove();
      resolve(false);
    });

    confirmBtn.addEventListener('click', () => {
      overlay.remove();
      resolve(true);
    });

    footer.appendChild(cancelBtn);
    footer.appendChild(confirmBtn);

    dialog.appendChild(content);
    dialog.appendChild(footer);
    overlay.appendChild(dialog);

    // 点击遮罩关闭
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
        resolve(false);
      }
    });

    document.body.appendChild(overlay);
  });
}

/**
 * 输入对话框 - 替代 prompt
 * @param {string} message - 提示消息
 * @param {string} defaultValue - 默认值
 * @param {string} placeholder - 占位符
 * @returns {Promise<string|null>} 返回输入值，取消返回 null
 */
export function showInputDialog(message, defaultValue = '', placeholder = '') {
  return new Promise((resolve) => {
    addAnimations();

    const overlay = createOverlay();
    const dialog = createDialog();

    // 内容
    const content = document.createElement('div');
    content.style.cssText = `padding: 24px 20px;`;

    const label = document.createElement('div');
    label.style.cssText = `
      font-size: 15px;
      color: #374151;
      margin-bottom: 12px;
      line-height: 1.5;
    `;
    label.textContent = message;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = defaultValue;
    input.placeholder = placeholder;
    input.style.cssText = `
      width: 100%;
      padding: 12px;
      border: 1px solid #D1D5DB;
      border-radius: 8px;
      font-size: 15px;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s;
    `;

    input.addEventListener('focus', () => {
      input.style.borderColor = '#3B82F6';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '#D1D5DB';
    });

    content.appendChild(label);
    content.appendChild(input);

    // 按钮组
    const footer = document.createElement('div');
    footer.style.cssText = `
      padding: 16px 20px;
      display: flex;
      gap: 12px;
      border-top: 1px solid #E5E7EB;
    `;

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = '取消';
    cancelBtn.style.cssText = `
      flex: 1;
      padding: 12px;
      border: 1px solid #D1D5DB;
      background: white;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      color: #6B7280;
      cursor: pointer;
    `;

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = '确认';
    confirmBtn.style.cssText = `
      flex: 1;
      padding: 12px;
      border: none;
      background: #3B82F6;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      color: white;
      cursor: pointer;
    `;

    cancelBtn.addEventListener('click', () => {
      overlay.remove();
      resolve(null);
    });

    confirmBtn.addEventListener('click', () => {
      overlay.remove();
      resolve(input.value);
    });

    // 回车确认
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        overlay.remove();
        resolve(input.value);
      } else if (e.key === 'Escape') {
        overlay.remove();
        resolve(null);
      }
    });

    footer.appendChild(cancelBtn);
    footer.appendChild(confirmBtn);

    dialog.appendChild(content);
    dialog.appendChild(footer);
    overlay.appendChild(dialog);

    // 点击遮罩关闭
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
        resolve(null);
      }
    });

    document.body.appendChild(overlay);

    // 自动聚焦输入框
    setTimeout(() => input.focus(), 100);
  });
}
