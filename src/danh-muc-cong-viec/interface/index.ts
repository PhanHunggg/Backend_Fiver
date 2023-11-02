import { ApiProperty } from "@nestjs/swagger";

export class JobCatalogInterface {
    @ApiProperty({ description: 'name_job_catalog', type: String })
    name_job_catalog: string;

    @ApiProperty({ description: 'id_type_detail', type: String })
    id_type_detail: string;

}