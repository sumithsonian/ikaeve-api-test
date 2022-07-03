import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {
  @Get()
  findAll(): string {
    return 'This action returns all tournaments';
  }
}
