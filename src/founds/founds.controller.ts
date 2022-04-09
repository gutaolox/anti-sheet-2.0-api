import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoundsService } from './founds.service';
import { CreateFoundDto } from './dto/create-found.dto';
import { UpdateFoundDto } from './dto/update-found.dto';

@Controller('founds')
export class FoundsController {
  constructor(private readonly foundsService: FoundsService) {}

  @Post()
  create(@Body() createFoundDto: CreateFoundDto) {
    return this.foundsService.create(createFoundDto);
  }

  @Get()
  findAll() {
    return this.foundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foundsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoundDto: UpdateFoundDto) {
    return this.foundsService.update(+id, updateFoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foundsService.remove(+id);
  }
}
