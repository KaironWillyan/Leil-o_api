import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuratorService } from './curator.service';
import { CreateCuratorDto } from './dto/create-curator.dto';
import { UpdateCuratorDto } from './dto/update-curator.dto';

@Controller('curator')
export class CuratorController {
  constructor(private readonly curatorService: CuratorService) {}

  @Post()
  create(@Body() createCuratorDto: CreateCuratorDto) {
    return this.curatorService.create(createCuratorDto);
  }

  @Get()
  findAll() {
    return this.curatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuratorDto: UpdateCuratorDto) {
    return this.curatorService.update(+id, updateCuratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curatorService.remove(+id);
  }
}
