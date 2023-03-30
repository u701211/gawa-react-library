/** Pushの状態を取得します true:受信中, false:停止中 */
export const getPushStatus = (callback: (token: boolean) => void) => {
  const proxy = (window as any).flutter_getPushStatus;

  proxy.callback = (result: boolean | object) => {
    if (typeof result === 'boolean') {
      callback(result);
    }
    else {
      throw new Error(JSON.stringify(result))
    }
  };
  proxy.postMessage('');
}

export default getPushStatus
