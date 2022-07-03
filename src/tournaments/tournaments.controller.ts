import {
  Controller,
  Get,
  // Query,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {
  @Post()
  create(): string {
    return 'This action adds a new tournament';
  }

  @Get()
  findAll(): string {
    return 'This action returns all tournaments';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} tournament`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} tournament`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} tournament`;
  }
}
