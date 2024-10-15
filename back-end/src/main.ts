import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(urlencoded({ extended: false, limit: 100000 }));
  await app.listen(3000);
}
bootstrap();
