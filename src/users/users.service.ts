import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	private readonly users: User[] = [
		{
			id: randomUUID(),
			username: 'zach@test.com',
			password: 'admin123'
		},
		{
			id: randomUUID(),
			username: 'maria@test.com',
			password: 'guess'
		}
	];

	async findOne(userName: string): Promise<User | undefined> {
		return this.users.find(user => user.username === userName);
	}
}
