import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { createWriteStream } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("Swagger").addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("swagger", app, document);

  app.enableCors()
  app.use(express.static("."))
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);

  const serverUrl = "https://fiver-sever.vercel.app/" || "http://localhost:8080"

  if (process.env.NODE_ENV === 'development') {

    // write swagger ui files
    get(
      `${serverUrl}/swagger/swagger-ui-bundle.js`, function 
      (response) {
        response.pipe(createWriteStream('swagger-static/swagger-ui-bundle.js'));
        console.log(
    `Swagger UI bundle file written to: '/swagger-static/swagger-ui-bundle.js'`,
  );
    });

    get(`${serverUrl}/swagger/swagger-ui-init.js`, function (response) {
      response.pipe(createWriteStream('swagger-static/swagger-ui-init.js'));
      console.log(
    `Swagger UI init file written to: '/swagger-static/swagger-ui-init.js'`,
  );
    });

    get(
  `${serverUrl}/swagger/swagger-ui-standalone-preset.js`,
  function (response) {
      response.pipe(
      createWriteStream('swagger-static/swagger-ui-standalone-preset.js'),
    );
      console.log(
      `Swagger UI standalone preset file written to: '/swagger-static/swagger-ui-standalone-preset.js'`,
    );
    });

    get(`${serverUrl}/swagger/swagger-ui.css`, function (response) {
      response.pipe(createWriteStream('swagger-static/swagger-ui.css'));
      console.log(
    `Swagger UI css file written to: '/swagger-static/swagger-ui.css'`,
  );
    });

  }
}
bootstrap();
