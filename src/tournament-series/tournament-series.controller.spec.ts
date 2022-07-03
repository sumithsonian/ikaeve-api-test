import { Test, TestingModule } from '@nestjs/testing';
import { TournamentSeriesController } from './tournament-series.controller';

describe('TournamentSeriesController', () => {
  let controller: TournamentSeriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentSeriesController],
    }).compile();

    controller = module.get<TournamentSeriesController>(
      TournamentSeriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
