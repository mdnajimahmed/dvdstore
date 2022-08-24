import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMessageTable_ts1661346283625 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS message (
          id serial PRIMARY KEY,
        message VARCHAR ( 32 ) UNIQUE NOT NULL);`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE IF EXISTS message`
    );
  }

}
