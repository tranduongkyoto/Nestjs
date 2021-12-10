import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(
        private mailer: MailService
    ) { }
    @Cron('15 * * * * *')// send Email every minutes  in 15th second 

    async handleCron() {
        await this.mailer.example();
        this.logger.debug('Called when the current second is 15');
    }
}