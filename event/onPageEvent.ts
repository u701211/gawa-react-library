export type AppLifecycleState = 'inactive' | 'paused' | 'resumed' | 'detached';

/** ページで発生するイベントを取得します */
export const onPageEvent = (callback: (state: string) => void) => {
  const proxy = (window as any).flutter_onPageEvent;

  proxy.callback = (state: string) => {
    callback(state);
  };
}

export default onPageEvent
