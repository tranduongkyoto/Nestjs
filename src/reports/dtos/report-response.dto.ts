import { Expose, Transform } from "class-transformer";

export class ReportResponseDto {
    @Expose()
    id: string

    @Expose()
    price: string

    @Expose()
    year: string

    @Expose()
    lng: string

    @Expose()
    lat: string

    @Expose()
    make: string

    @Expose()
    model: string

    @Expose()
    mileage: string

    @Expose()
    approved: string

    @Transform(({ obj }) => obj.user.id)
    @Expose()
    userId: number

}