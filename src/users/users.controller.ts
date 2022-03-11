import { Body, Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
	@UseGuards(JwtAuthGuard)
	@Get('profile')
	async getProfile(@Request() req: any): Promise<User> {
		return req.user as User;
	}
}
