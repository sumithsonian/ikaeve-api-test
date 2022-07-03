import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//
import { UsersController } from './users/users.controller';
import { TournamentsController as UsersTournamentsController } from './users/tournaments/tournaments.controller';
import { TeamsController as UsersTeamsController } from './users/teams/teams.controller';
import { MeController as UsersMeController } from './users/me/me.controller';
//
import { TeamsController } from './teams/teams.controller';
import { UsersController as TeamsUsersController } from './teams/users/users.controller';
import { TournamentsController as TeamsTournamentsController } from './teams/tournaments/tournaments.controller';
import { TournamentSeriesController as TeamsTournamentSeriesController } from './teams/tournament-series/tournament-series.controller';
//
import { TournamentsController } from './tournaments/tournaments.controller';
import { TeamsController as TournamentsTeamsController } from './tournaments/teams/teams.controller';
import { MatchsController as TournamentsMatchsController } from './tournaments/matchs/matchs.controller';
//
import { TournamentSeriesController } from './tournament-series/tournament-series.controller';
import { TournamentsController as TournamentSeriesTournamentsController } from './tournament-series/tournaments/tournaments.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    //
    UsersController,
    UsersTournamentsController,
    UsersTeamsController,
    UsersMeController,
    //
    TeamsController,
    TeamsUsersController,
    TeamsTournamentsController,
    TeamsTournamentSeriesController,
    //
    TournamentsController,
    TournamentsTeamsController,
    TournamentsMatchsController,
    //
    TournamentSeriesController,
    TournamentSeriesTournamentsController,
  ],
  providers: [AppService],
})
export class AppModule {}
