import { IsEmail, IsString } from 'class-validator';
import { Report } from 'src/reports/report.entity';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  //report: Report[];
}
