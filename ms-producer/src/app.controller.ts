import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getTest() {
    return fetch('https://dummyjson.com/test')
      .then((res) => res.json())
      .then((data) => {
        return { test: data };
      });
  }
}
