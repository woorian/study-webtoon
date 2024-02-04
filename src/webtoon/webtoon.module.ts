import { Module } from '@nestjs/common';
import { webtoonController } from './webtoon.controller';
import { WebtoonService } from './webtoon.service';

@Module({
  controllers: [webtoonController],
  providers: [WebtoonService],
})
export class webtoonModule {}
