import { Injectable, NotFoundException } from '@nestjs/common';
import { webtoon } from './entities/webtoon.entity';
import { CreatewebtoonDto } from './dto/create-webtoon.dto';
import { UpdatewebtoonDto } from './dto/update-webtoon.dto';

@Injectable()
export class WebtoonService {
  private webtoon: webtoon[] = [];

  getAll(): webtoon[] {
    return this.webtoon;
  }

  getOne(id: number): webtoon {
    const webtoon = this.webtoon.find((webtoon) => webtoon.id === id);
    if (!webtoon) {
      throw new NotFoundException(`webtoon with ID ${id} not found.`);
    }
    return webtoon;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.webtoon = this.webtoon.filter((webtoon) => webtoon.id !== id);
  }

  create(webtoonData: CreatewebtoonDto) {
    this.webtoon.push({
      id: this.webtoon.length + 1,
      ...webtoonData,
    });
  }

  update(id: number, updateData: UpdatewebtoonDto) {
    const webtoon = this.getOne(id);
    this.deleteOne(id);
    this.webtoon.push({ ...webtoon, ...updateData });
  }
}
