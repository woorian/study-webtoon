import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return '출처 url https://korea-webtoon-api.herokuapp.com/?perPage=20&page=1&service=naver';
  }
}
