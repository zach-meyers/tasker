import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Post()
	async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
		return await this.tasksService.create(createTaskDto);
	}

	@Get()
	async findAll(): Promise<Task[]> {
		return await this.tasksService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Task> {
		return await this.tasksService.findOne(id);
	}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
		return await this.tasksService.update(id, updateTaskDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<void> {
		await this.tasksService.remove(id);
	}
}
