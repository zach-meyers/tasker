import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
	type: 'postgresql',
	host: process.env['DATABASE_HOST'],
	port: parseInt(process.env['DATABASE_PORT']),
	user: 'postgres',
	password: 'p@ssw0rd',
	dbName: 'tasks',
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/**/*.entity.ts'],
	debug: true,
	loadStrategy: LoadStrategy.JOINED,
	migrations: {
		path: 'dist/migrations',
		pathTs: 'src/migrations'
	}
};

export default config;
