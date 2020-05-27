import { MitarbeiterService } from './mitarbeiter.service';
import { MitarbeiterController } from './mitarbeiter.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [MitarbeiterController],
  providers: [MitarbeiterService],
})
export class MitarbeiterModule {}
