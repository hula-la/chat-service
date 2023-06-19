import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('chat')
export class ChatController {

    @Get(':id')
    findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
    }
}
