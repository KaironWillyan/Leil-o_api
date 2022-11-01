import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThrowService } from './throw.service';
import { CreateThrowDto } from './dto/create-throw.dto';
import { UpdateThrowDto } from './dto/update-throw.dto';

@Controller('throw')
export class ThrowController {
  constructor(private readonly throwService: ThrowService) {}

  @Post()
  create(@Body() createThrowDto: CreateThrowDto) {
    return this.throwService.create(createThrowDto);
  }

  @Get()
  findAll() {
    return this.throwService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.throwService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThrowDto: UpdateThrowDto) {
    return this.throwService.update(+id, updateThrowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.throwService.remove(+id);
  }
}
