import { Module } from '@nestjs/common';
import { LoaiCongViecService } from './loai-cong-viec.service';
import { LoaiCongViecController } from './loai-cong-viec.controller';

@Module({
  providers: [LoaiCongViecService],
  controllers: [LoaiCongViecController]
})
export class LoaiCongViecModule {}
