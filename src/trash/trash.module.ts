import { TrashService } from './trash.service';
import { TrashController } from './trash.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TrashController],
  providers: [TrashService],
})
export class TrashModule {}
