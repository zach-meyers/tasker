import { Migration } from '@mikro-orm/migrations';

export class Migration20220307205343 extends Migration {
	async up(): Promise<void> {
		this.addSql('alter table "task" drop constraint if exists "task_id_check";');
		this.addSql('alter table "task" alter column "id" drop default;');
		this.addSql('alter table "task" alter column "id" type uuid using ("id"::text::uuid);');
	}

	async down(): Promise<void> {
		this.addSql('alter table "task" alter column "id" type text using ("id"::text);');

		this.addSql('alter table "task" drop constraint if exists "task_id_check";');
		this.addSql('alter table "task" alter column "id" type varchar(255) using ("id"::varchar(255));');
	}
}
