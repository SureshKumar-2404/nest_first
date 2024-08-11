import { Controller, Get, Req, Request } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  @Get('/profile')
  getProfile(@Req() req) {
    // return {
    //   hello: 'hello World',
    // };
    console.log(req);
    return new Promise((reslove, reject) => {
      reslove({
        hello: 'Hello World',
      });
    });
  }
}
