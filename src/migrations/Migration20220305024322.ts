import { Migration } from '@mikro-orm/migrations';

export class Migration20220305024322 extends Migration {
	async up(): Promise<void> {
		this.addSql('create table "task" ("id" varchar(255) not null, "description" varchar(255) not null, "category" varchar(255) null);');
		this.addSql('alter table "task" add constraint "task_pkey" primary key ("id");');
	}
}
