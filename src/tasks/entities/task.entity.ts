import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { randomUUID } from 'crypto';

@Entity()
export class Task {
	@PrimaryKey({ columnType: 'uuid' })
	id: string = randomUUID();

	@Property()
	description: string;

	@Property({ nullable: true })
	category?: string;
}
