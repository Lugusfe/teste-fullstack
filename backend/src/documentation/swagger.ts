import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export async function backendDocumentation(
  app: INestApplication,
  endpoint: string,
) {
  const swaggerModuleOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
      persistAuthorization: true,
    },
  };

  const config = new DocumentBuilder()
    .setTitle('Backend Api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(endpoint, app, document, swaggerModuleOptions);
}
