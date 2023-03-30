/** QRコードを取得します
 * キャンセルされた場合は空文字が返却されます
*/
export const getQRCode = (callback: (code: string) => void) => {
  const proxy = (window as any).flutter_getQRCode;

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

export default getQRCode
