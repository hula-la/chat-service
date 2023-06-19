import { MessageBody, SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { from, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@WebSocketGateway()
export class ChatGateway {
  // @SubscribeMessage('events')
  // handleEvent(@MessageBody() data: string): string {
  //     return data;
  // }
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }


}
