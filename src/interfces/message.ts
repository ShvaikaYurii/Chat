export interface IMessage {
  isRead: boolean,
  id: number,
  autor: string,
  payload: string,
  color: string
  time: string,
  img: string,
  type: string
  replyingMessage : IMessage
}