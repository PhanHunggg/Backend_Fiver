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
    origin: '*',
    methods: "*",
  });


  app.use(express.static('.'))
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);

}
bootstrap();
