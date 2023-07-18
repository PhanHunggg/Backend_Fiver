import { Module } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { NguoiDungController } from './nguoi-dung.controller';

@Module({
  providers: [NguoiDungService],
  controllers: [NguoiDungController]
})
export class NguoiDungModule {}
