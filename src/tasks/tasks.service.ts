import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
	constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {}

	async create(createTaskDto: CreateTaskDto): Promise<Task> {
		const createdTask = await this.taskModel.create(createTaskDto);
		return createdTask;
	}

	async findAll(): Promise<Task[]> {
		return await this.taskModel.find().exec();
	}

	async findOne(id: string): Promise<Task> {
		return await this.taskModel.findById(id).exec();
	}

	async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
		return await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
	}

	async remove(id: string): Promise<void> {
		await this.taskModel.findByIdAndDelete(id).exec();
	}
}
