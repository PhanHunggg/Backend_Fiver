import { Module } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { CongViecController } from './cong-viec.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  providers: [CongViecService,CloudinaryService],
  controllers: [CongViecController]
})
export class CongViecModule {}
