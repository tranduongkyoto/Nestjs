import { Expose, Transform } from 'class-transformer';
import { Report } from 'src/reports/report.entity';

export class UserResponseDto {
    @Expose()
    id: number;

    @Expose()
    email: string;

    @Transform(({ obj }) => obj.reports)
    @Expose()
    report: Report[];
}
