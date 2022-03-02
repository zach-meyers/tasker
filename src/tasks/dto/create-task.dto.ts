import { randomUUID } from 'crypto';

export class CreateTaskDto {
	id: string = randomUUID();
	description: string;
	category: string = 'Other';
}
