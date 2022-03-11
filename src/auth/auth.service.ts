import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Jwt } from './dto/jwt.dto';

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService, private readonly jwtService: JwtService) {}

	async validateUser(username: string, pass: string): Promise<Partial<User>> {
		const user = await this.usersService.findOne(username);

		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		} else {
			return null;
		}
	}

	async login(user: User): Promise<Jwt> {
		const payload = { username: user.username, sub: user.id };
		return {
			access_token: await this.jwtService.signAsync(payload)
		};
	}
}
