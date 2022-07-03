import { Controller, Get } from '@nestjs/common';

@Controller('tournament-series')
export class TournamentSeriesController {
  @Get()
  findAll(): string {
    return 'This action returns all tournament series';
  }
}
