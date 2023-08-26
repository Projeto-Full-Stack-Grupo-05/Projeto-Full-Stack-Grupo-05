import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693065458533 implements MigrationInterface {
    name = 'InitialMigration1693065458533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" ADD "img_url" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "img_url"`);
    }

}
