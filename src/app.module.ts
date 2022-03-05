import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MikroOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				entities: ['dist/**/*.entity{.ts,.js}'],
				entitiesTs: ['dist/**/*.entity{.ts,.js}'],
				type: 'postgresql',
				clientUrl: configService.get('DATABASE_URL'),
				dbName: configService.get('DATABASE_NAME'),
				user: configService.get('DATABASE_USER'),
				password: configService.get('DATABASE_PASSWORD')
			})
		}),
		TasksModule
	]
})
export class AppModule {}
