import { Injectable } from '@nestjs/common';
import { CreateThrowDto } from './dto/create-throw.dto';
import { UpdateThrowDto } from './dto/update-throw.dto';

@Injectable()
export class ThrowService {
  create(createThrowDto: CreateThrowDto) {
    return 'This action adds a new throw';
  }

  findAll() {
    return `This action returns all throw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} throw`;
  }

  update(id: number, updateThrowDto: UpdateThrowDto) {
    return `This action updates a #${id} throw`;
  }

  remove(id: number) {
    return `This action removes a #${id} throw`;
  }
}
