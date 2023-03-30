/** onWillPopイベントを取得します
 * イベントをキャンセルする場合は false を返却して下さい
 */
export const onWillPop = (callback: () => boolean) => {
  const proxy = (window as any).flutter_onWillPop;

  proxy.callback = () => {
    return callback();
  };
}

export default onWillPop
