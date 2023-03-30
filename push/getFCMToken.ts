/** FCM Tokenを取得します */
export const getFCMToken = (callback: (token: string) => void) => {
  const proxy = (window as any).flutter_getFCMToken;

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

export default getFCMToken
