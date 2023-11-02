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

    @ApiProperty({ description: "id_job_catalog", type: String })
    id_job_catalog: string;

    @ApiProperty({ description: "id_creator", type: String })
    id_creator: string;

}