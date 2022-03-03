import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ToObjectOptions } from 'mongoose';

export type TaskDocument = Task & Document;

const toObjectOptions: ToObjectOptions = {
	virtuals: true,
	versionKey: false,
	transform: (_doc, ret) => {
		delete ret._id;
	}
};

@Schema({ toJSON: toObjectOptions, toObject: toObjectOptions })
export class Task {
	@Prop()
	description: string;

	@Prop()
	category: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
