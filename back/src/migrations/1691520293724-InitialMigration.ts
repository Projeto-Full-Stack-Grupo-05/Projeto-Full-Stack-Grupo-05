import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691520293724 implements MigrationInterface {
    name = 'InitialMigration1691520293724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "car_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" ADD "car_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "user_id" character varying NOT NULL`);
    }

}
