import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDTO } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private service: AdminService) {}

  @Post()
  async createAdmin(@Body() body: AdminDTO) {
    const result = await this.service.addAdmin(body);
    return result;
  }

  @Get(':id')
  async findeOne(@Param('id') _id: any) {
    const result = await this.service.findOne(_id);
    result.data.id = result._id;
    return result.data;
  }

  @Get(':typ')
  async findByTyp(@Param('typ') _typ: string) {
    const result = await this.service.findAllByTyp(_typ);
    //result.data.id = result.id;
    return result;
  }

  @Get()
  async findAll() {
    const result = await this.service.findAll();
    return result;
  }

  @Delete(':id')
  async DeleteOne(@Param('id') _id: any) {
    const result = await this.service.deleteOne(_id);
    return result;
  }

  @Patch(':id')
  async UpdateOne(@Param('id') id: any, @Body() body: any) {
    const result = this.service.updateByAdmin(id, body);

    return result;
  }

  @Get(':userName/:password')
  async checkAdmin(@Param() params: any) {
    const userName = params.userName;
    const password = params.password;
    const result = await this.service.CheckAdmin(userName, password);

    return result;
  }
}
