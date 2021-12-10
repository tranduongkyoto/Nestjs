import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Report } from './reports/report.entity';
const cookieSession = require('cookie-session');


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME,
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
    ScheduleModule.forRoot(),
    MailModule,
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
  exports: [ConfigModule]
})
export class AppModule {
  constructor(private configService: ConfigService) { }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      cookieSession({
        keys: [process.env.COOKIE_KEY],
      })
    ).forRoutes("*");
  }
}
