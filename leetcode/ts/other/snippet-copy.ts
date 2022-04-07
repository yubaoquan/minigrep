/** 在 snippet 中执行, 复制文本到粘贴板 */

export const startCopy = (text: string) => {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.info('copy done');
      window.removeEventListener('focus', copy);
    } catch (e) {
      console.error(e);
    }
  };

  window.addEventListener('focus', copy);
};
