import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SignalsModule } from './signals/signals.module';

async function bootstrap() {
  const app = await NestFactory.create(SignalsModule);
  const config = new DocumentBuilder()
    .setTitle('Api sinais')
    .setDescription('Esta api retorna sinal e suas categorias')
    .setVersion('1.0')
    .addTag('Sinais')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
