import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { backendDocumentation } from './documentation/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await backendDocumentation(app, 'api');
  await app.listen(3501);
}
bootstrap();
