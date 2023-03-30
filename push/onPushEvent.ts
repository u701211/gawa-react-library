import { PushMessage } from "./types";

/** Pushイベントを取得します */
export const onPushEvent = (callback: (pushMessage: PushMessage) => void) => {
  const proxy = (window as any).flutter_onPushEvent;

  proxy.callback = (result: string | object) => {
    if (typeof result === 'string') {
      callback(JSON.parse(result) as PushMessage);
    }
    else {
      throw new Error(JSON.stringify(result))
    }
  };
}

export default onPushEvent
