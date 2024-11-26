import { NestFactory } from '@nestjs/core';
import { BackOfficeModule } from './backoffice.module';

async function bootstrap() {
  const app = await NestFactory.create(BackOfficeModule);
  await app.listen(8080);
}
bootstrap();
