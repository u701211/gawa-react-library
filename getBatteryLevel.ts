/** バッテリーレベルを取得します */
export const getBatteryLevel = (callback: (level: number) => void) => {
  const proxy = (window as any).flutter_getBatteryLevel;

  proxy.callback = (result: number | object) => {
    if (typeof result === 'number') {
      callback(result);
    }
    else {
      throw new Error(JSON.stringify(result))
    }
  };
  proxy.postMessage('');
}

export default getBatteryLevel
