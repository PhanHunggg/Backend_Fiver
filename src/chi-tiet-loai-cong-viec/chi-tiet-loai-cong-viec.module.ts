import { Module } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { ChiTietLoaiCongViecController } from './chi-tiet-loai-cong-viec.controller';

@Module({
  providers: [ChiTietLoaiCongViecService],
  controllers: [ChiTietLoaiCongViecController]
})
export class ChiTietLoaiCongViecModule {}
