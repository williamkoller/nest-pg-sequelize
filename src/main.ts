import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = process.env.PORT;
  await app.listen(port, () =>
    logger.log(`Server running in ${process.env.APP_URL}:${port}`),
  );
}
bootstrap();
