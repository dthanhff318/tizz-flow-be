import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('>', process.env.PORT);
  app.enableCors({
    origin: 'http://localhost:5173', // Allow your React app's domain here
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
