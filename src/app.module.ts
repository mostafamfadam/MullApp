import { TrashModule } from './trash/trash.module';
import { MitarbeiterModule } from './mitarbeiter/mitarbeiter.module';
import { AdminModule } from './admin/admin.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TrashModule, MitarbeiterModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
