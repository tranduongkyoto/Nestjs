import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    public async example(message: string = "Email test from task schedule in nest server") {
        console.log(process.env.outlook_user)
        await this
            .mailerService
            .sendMail({
                to: 'tranduongkyoto@gmail.com', // list of receivers
                from: 'duong.td183726@sis.hust.edu.vn', // sender address
                subject: 'Testing Nest MailerModule ✔', // Subject line
                text: `${message}`, // plaintext body
                html: `<b>${message}</b>`, // HTML body content
            })
            .then((success) => {
                console.log(success)
            })
            .catch((err) => {
                console.log(err)
            });
    }


}
