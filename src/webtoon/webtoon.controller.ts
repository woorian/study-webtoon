import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { WebtoonService } from './webtoon.service';
import { webtoon } from './entities/webtoon.entity';
import { CreatewebtoonDto } from './dto/create-webtoon.dto';
import { UpdatewebtoonDto } from './dto/update-webtoon.dto';

@Controller('webtoon')
export class webtoonController {
  constructor(private readonly webtoonService: WebtoonService) {}

  @Get()
  getAll(): webtoon[] {
    return this.webtoonService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') webtoonId: number): webtoon {
    return this.webtoonService.getOne(webtoonId);
  }

  @Post()
  create(@Body() webtoonData: CreatewebtoonDto) {
    return this.webtoonService.create(webtoonData);
  }

  @Delete(':id')
  remove(@Param('id') webtoonId: number) {
    return this.webtoonService.deleteOne(webtoonId);
  }

  @Patch(':id')
  patch(@Param('id') webtoonId: number, @Body() updateData: UpdatewebtoonDto) {
    return this.webtoonService.update(webtoonId, updateData);
  }
}
