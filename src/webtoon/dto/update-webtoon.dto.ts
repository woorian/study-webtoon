import { PartialType } from '@nestjs/mapped-types';
import { CreatewebtoonDto } from './create-webtoon.dto';

export class UpdatewebtoonDto extends PartialType(CreatewebtoonDto) {}
