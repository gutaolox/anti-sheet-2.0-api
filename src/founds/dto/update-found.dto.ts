import { PartialType } from '@nestjs/mapped-types';
import { CreateFoundDto } from './create-found.dto';

export class UpdateFoundDto extends PartialType(CreateFoundDto) {}
