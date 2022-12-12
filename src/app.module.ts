import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { TeamMembersRepository } from './repositories/members.repository';
import { PrismaTeamMembersRepository } from './repositories/prisma/prisma-rocket-members.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: TeamMembersRepository,
      useClass: PrismaTeamMembersRepository,
    },
  ],
})
export class AppModule {}
