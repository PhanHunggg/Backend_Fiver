import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common';
import { get } from 'https';
import { createWriteStream, writeFileSync } from 'fs';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("Swagger").addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("swagger", app, document);

  app.enableCors({
    origin: 'http://localhost:5173', // Thay đổi origin theo nơi bạn muốn cho phép truy cập
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  
  app.use(express.static('.'))
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(8080);
  
}
bootstrap();
