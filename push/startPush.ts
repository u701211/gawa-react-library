/** Push受信を開始します */
export const startPush = (callback: (token: string) => void) => {
  const proxy = (window as any).flutter_startPush;

  proxy.callback = (result: string | object) => {
    if (typeof result === 'string') {
      callback(result);
    }
    else {
      throw new Error(JSON.stringify(result))
    }
  };
  proxy.postMessage('');
}

export default startPush
