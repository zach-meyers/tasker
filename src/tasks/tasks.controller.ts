import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Post()
	create(@Body() createTaskDto: CreateTaskDto): Task {
		return this.tasksService.create(createTaskDto);
	}

	@Get()
	findAll(): Task[] {
		return this.tasksService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Task {
		return this.tasksService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Task {
		return this.tasksService.update(id, updateTaskDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string): void {
		this.tasksService.remove(id);
	}
}
