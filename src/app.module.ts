import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TeamsController } from './teams/teams.controller';
import { TournamentsController } from './tournaments/tournaments.controller';
import { TournamentSeriesController } from './tournament-series/tournament-series.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    TeamsController,
    TournamentsController,
    TournamentSeriesController,
  ],
  providers: [AppService],
})
export class AppModule {}
