/** Pushメッセージ */
export type PushMessage = {
    messageId: string,
    sentUTCTime: string,
    title: string,
    body: string,
    imageUrl: string,
    data: { [key: string]: string }
}
