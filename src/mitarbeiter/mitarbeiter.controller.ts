import { Controller, Get, Param } from '@nestjs/common';
import { MitarbeiterService } from './mitarbeiter.service';

@Controller('amt')
export class MitarbeiterController {
  constructor(private service: MitarbeiterService) {}

  @Get()
  async GetAll() {
    const result = await this.service.findAll();

    return result;
  }

  @Get(':userName/:password')
  async Check(@Param('userName') userName, @Param('password') password) {
    const result = await this.service.CheckMitarbeiter(userName, password);
    return result.docs;
  }

  @Get(':id')
  async getOne(@Param('id') id: any) {
    const result = await this.service.findOne(id);
    return result;
  }
}
