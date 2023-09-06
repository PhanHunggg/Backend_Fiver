import { Module } from '@nestjs/common';
import { DanhMucCongViecService } from './danh-muc-cong-viec.service';
import { DanhMucCongViecController } from './danh-muc-cong-viec.controller';

@Module({
  controllers: [DanhMucCongViecController],
  providers: [DanhMucCongViecService]
})
export class DanhMucCongViecModule {}
