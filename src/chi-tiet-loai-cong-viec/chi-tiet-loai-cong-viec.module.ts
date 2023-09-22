import { Module } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { ChiTietLoaiCongViecController } from './chi-tiet-loai-cong-viec.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  providers: [ChiTietLoaiCongViecService, CloudinaryService],
  controllers: [ChiTietLoaiCongViecController]
})
export class ChiTietLoaiCongViecModule { }
