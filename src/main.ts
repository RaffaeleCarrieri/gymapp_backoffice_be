import { NestFactory } from '@nestjs/core';
import { BackOfficeModule } from './backoffice.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(BackOfficeModule);
  const config = new DocumentBuilder()
    .setTitle('GymApp BackOffice Api')
    .setDescription('api per il BackOffice di GymApp Api')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('swagger-ui',app,document)
  await app.listen(8080);
}
bootstrap();
