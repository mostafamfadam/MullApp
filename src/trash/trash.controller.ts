import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { TrashService } from './trash.service';

@Controller('trash')
export class TrashController {
  constructor(private service: TrashService) {}

  @Get('')
  async viewAllTrashes() {
    const result = await this.service.findAll();
    return result;
  }

  @Post()
  async createTrash(@Body() body: any) {
    const result = await this.service.addOne(body);
    return result;
  }

  @Patch(':userId/:id')
  async updateTrash(
    @Param('userId') userId,
    @Param('id') id,
    @Body() body: any,
  ) {
    const result = await this.service.updateOne(userId, id, body);
    return result;
  }
}
