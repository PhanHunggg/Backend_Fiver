export interface UserSignUpDto {
    id_user: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    birth_day: Date;
    gender: boolean;
    role: string;
    skill: string;
    certification: string;
    hash: string;
    hashedRt: string;
}
export type UserProfile = {
    id_user: number;
    name: string;
    email: string;
    phone: string;
    birth_day: Date;
    gender: boolean;
    skill: string;
    certification: string;
};
export declare class FileUploadDto {
    fileUpload: any;
}