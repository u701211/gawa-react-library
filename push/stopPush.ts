/** Push受信を停止します */
export const stopPush = () => {
  const proxy = (window as any).flutter_stopPush;

  proxy.callback = (result: object) => {
    if (result != null) {
      throw new Error(JSON.stringify(result))
    }
  };
  proxy.postMessage('');
}

export default stopPush
