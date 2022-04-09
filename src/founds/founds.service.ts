import { Injectable } from '@nestjs/common';
import { CreateFoundDto } from './dto/create-found.dto';
import { UpdateFoundDto } from './dto/update-found.dto';

@Injectable()
export class FoundsService {
  create(createFoundDto: CreateFoundDto) {
    return 'This action adds a new found';
  }

  findAll() {
    return `This action returns all founds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} found`;
  }

  update(id: number, updateFoundDto: UpdateFoundDto) {
    return `This action updates a #${id} found`;
  }

  remove(id: number) {
    return `This action removes a #${id} found`;
  }
}
