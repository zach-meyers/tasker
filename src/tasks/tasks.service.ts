import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
	private readonly tasks: Task[] = [];

	create(createTaskDto: CreateTaskDto): Task {
		const task = {
			id: createTaskDto.id,
			description: createTaskDto.description,
			category: createTaskDto.category
		} as Task;
		this.tasks.push(task);

		return task;
	}

	findAll(): Task[] {
		return this.tasks;
	}

	findOne(id: string): Task {
		return this.tasks.find(task => task.id === id);
	}

	update(id: string, updateTaskDto: UpdateTaskDto): Task {
		const taskIndex = this.tasks.findIndex(task => task.id === id);
		let task = this.tasks.at(taskIndex);

		task.description = updateTaskDto.description ?? task.description;
		task.category = updateTaskDto.category ?? task.category;

		this.tasks.splice(taskIndex, 1, task);
		return task;
	}

	remove(id: string): void {
		const taskIndex = this.tasks.findIndex(task => task.id === id);
		this.tasks.splice(taskIndex, 1);
	}
}
