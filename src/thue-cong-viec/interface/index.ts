import { ApiProperty } from "@nestjs/swagger";

export class HireJobInterface {
    @ApiProperty({ description: 'id_job', type: String })
    id_job: string;

    @ApiProperty({ description: 'id_user', type: String })
    id_user: string;

    complete?: boolean;
}