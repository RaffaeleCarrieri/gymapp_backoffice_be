import { NestFactory } from '@nestjs/core';
import { BackOfficeModule } from './backoffice.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(BackOfficeModule);
  await app.listen(8080);
}
bootstrap();
