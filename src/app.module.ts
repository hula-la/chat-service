import { Module } from '@nestjs/common';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [ChatController],
  providers: [],
})
export class AppModule {}
