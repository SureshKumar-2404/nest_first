import { Controller, Get } from '@nestjs/common';

@Controller('/album')
export class AlbumController {
  @Get('/data')
  getAlbum() {
    return {
      data: 'Album',
    };
  }
}
