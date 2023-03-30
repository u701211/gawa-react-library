import { PushMessage } from "./types";

/** 受信したPushメッセージを全て取得します */
export const getPushMessages = (callback: (pushMessages: PushMessage[]) => void) => {
  const proxy = (window as any).flutter_getPushMessages;

  proxy.callback = (result: string | object) => {
    if (typeof result === 'string') {
      var pushMessage = JSON.parse(result) as PushMessage[];
      callback(pushMessage);
    }
    else {
      throw new Error(JSON.stringify(result))
    }
  };
  proxy.postMessage('');
}

export default getPushMessages
