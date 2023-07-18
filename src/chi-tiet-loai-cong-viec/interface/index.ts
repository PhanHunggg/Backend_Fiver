import { ApiProperty } from "@nestjs/swagger";

export class TypeDetailInterface {
    @ApiProperty({ description: "detail_name", type: String })
    detail_name: string;

    @ApiProperty({ description: "id_type_job", type: Number })
    id_type_job: number;

    @ApiProperty({ description: "image", type: 'string', format: 'binary' })
    image: Express.Multer.File;
}

export class UpdateTypeDetailInterface {
    @ApiProperty({ description: "detail_name", type: String })
    detail_name: string;

    @ApiProperty({ description: "id_type_job", type: Number })
    id_type_job: number;
}

