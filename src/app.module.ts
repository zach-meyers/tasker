import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
	imports: [
		ConfigModule.forRoot({ load: [config] }),
		MikroOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				entities: ['dist/**/*.entity{.ts,.js}'],
				entitiesTs: ['dist/**/*.entity{.ts,.js}'],
				type: 'postgresql',
				host: configService.get('database.host'),
				port: configService.get('database.port'),
				dbName: configService.get('database.name'),
				user: configService.get('database.user'),
				password: configService.get('database.password')
			})
		}),
		TasksModule
	]
})
export class AppModule {}
