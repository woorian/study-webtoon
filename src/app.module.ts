import { Module } from '@nestjs/common';
import { webtoonModule } from './webtoon/webtoon.module';
import { AppController } from './app.controller';

@Module({
  imports: [webtoonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
