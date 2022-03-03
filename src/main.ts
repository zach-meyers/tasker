import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder().setTitle('Tasks service').setDescription('NestJs API for tracking tasks').setVersion('1.0').build();
	const options: SwaggerDocumentOptions = {
		operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey
	};
	const document = SwaggerModule.createDocument(app, config, options);
	SwaggerModule.setup('swagger', app, document);

	await app.listen(3000);
}
bootstrap();
