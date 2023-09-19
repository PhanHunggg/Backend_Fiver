import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BinhLuanModule } from './binh-luan/binh-luan.module';
import { ChiTietLoaiCongViecModule } from './chi-tiet-loai-cong-viec/chi-tiet-loai-cong-viec.module';
import { CongViecModule } from './cong-viec/cong-viec.module';
import { LoaiCongViecModule } from './loai-cong-viec/loai-cong-viec.module';
import { NguoiDungModule } from './nguoi-dung/nguoi-dung.module';
import { SkillModule } from './skill/skill.module';
import { ThueCongViecModule } from './thue-cong-viec/thue-cong-viec.module';
import { ConfigModule } from '@nestjs/config';
import { DanhMucCongViecModule } from './danh-muc-cong-viec/danh-muc-cong-viec.module';
import { AtGuard } from './common/guards';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [AuthModule, BinhLuanModule, ChiTietLoaiCongViecModule, CongViecModule, LoaiCongViecModule, NguoiDungModule, SkillModule, ThueCongViecModule, ConfigModule.forRoot({ isGlobal: true }), DanhMucCongViecModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AtGuard,
  },],
})
export class AppModule { }
