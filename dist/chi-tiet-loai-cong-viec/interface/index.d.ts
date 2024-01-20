/// <reference types="multer" />
export declare class TypeDetailInterface {
    id_type_job: number;
    detail_name: string;
    image: Express.Multer.File;
}
export declare class UpdateTypeDetailInterface {
    id_type_job: number;
    detail_name: string;
}
