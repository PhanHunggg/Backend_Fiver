import { Module } from '@nestjs/common';
import { BinhLuanService } from './binh-luan.service';
import { BinhLuanController } from './binh-luan.controller';

@Module({
  providers: [BinhLuanService],
  controllers: [BinhLuanController]
})
export class BinhLuanModule {}
