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
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';



@Module({
  imports: [AuthModule, BinhLuanModule, ChiTietLoaiCongViecModule, CongViecModule, LoaiCongViecModule, NguoiDungModule, SkillModule, ThueCongViecModule, ConfigModule.forRoot({ isGlobal: true }), DanhMucCongViecModule, CloudinaryModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'swagger-static'),
    serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
/*, {
    provide: APP_GUARD,
    useClass: AtGuard,
  },*/