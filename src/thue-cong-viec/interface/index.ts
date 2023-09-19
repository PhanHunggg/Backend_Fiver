import { ApiProperty } from "@nestjs/swagger";

export class HireJobInterface {
    @ApiProperty({ description: 'id_job', type: Number })
    id_job: number;

    @ApiProperty({ description: 'id_user', type: Number })
    id_user: number;

    complete?: boolean;
}