import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');


@Injectable()
export class CloudinaryService {
    async uploadImage(
        file: Express.Multer.File,
    ): Promise< string> {

        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream({
                folder: 'fiver'
            }, (error, result) => {
                if (error) return reject(error);

                if (result && result.secure_url) {
                    // Lấy URL an toàn (secure_url) và trả về nó
                    resolve(result.secure_url);
                } else {
                    reject(new Error('Không thể lấy URL hình ảnh sau khi tải lên.'));
                }
            });

            toStream(file.buffer).pipe(upload);
        });
    }
}