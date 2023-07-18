import { ApiProperty } from "@nestjs/swagger";

export class JobInterface {
    @ApiProperty({ description: "job_name", type: String })
    job_name: string;

    @ApiProperty({ description: "rate", type: String })
    rate: string;

    @ApiProperty({ description: "salary", type: Number })
    salary: number;

    @ApiProperty({ description: "describe", type: String })
    describe: string;

    @ApiProperty({ description: "short_description", type: String })
    short_description: string;

    @ApiProperty({ description: "star", type: Number })
    star: number;

    @ApiProperty({ description: "job_name", type: Number })
    id_type_detail: number;

    @ApiProperty({ description: "id_creator", type: Number })
    id_creator: number;

}