import { Module } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksService, MailService]
})
export class TasksModule { }
