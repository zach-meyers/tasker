import { wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
	constructor(@InjectRepository(Task) private readonly taskRepository: EntityRepository<Task>) {}

	async create(createTaskDto: CreateTaskDto): Promise<Task> {
		const task = this.taskRepository.create(createTaskDto);
		await this.taskRepository.persistAndFlush(task);

		return task;
	}

	async findAll(): Promise<Task[]> {
		return await this.taskRepository.findAll();
	}

	async findOne(id: string): Promise<Task> {
		return await this.taskRepository.findOne({ id: id });
	}

	async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
		const task = await this.findOne(id);
		wrap(task).assign(updateTaskDto);
		await this.taskRepository.flush();

		return task;
	}

	async remove(id: string): Promise<void> {
		await this.taskRepository.nativeDelete({ id: id });
	}
}
