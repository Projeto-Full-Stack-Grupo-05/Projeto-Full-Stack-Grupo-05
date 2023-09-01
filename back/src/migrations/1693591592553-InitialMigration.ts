import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693591592553 implements MigrationInterface {
    name = 'InitialMigration1693591592553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" RENAME COLUMN "car_id" TO "buyer_id"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "buyer_id"`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "buyer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "UQ_fb465726b1745ecff7eea073e0e" UNIQUE ("buyer_id")`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_fb465726b1745ecff7eea073e0e" FOREIGN KEY ("buyer_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_fb465726b1745ecff7eea073e0e"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "UQ_fb465726b1745ecff7eea073e0e"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "buyer_id"`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "buyer_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales" RENAME COLUMN "buyer_id" TO "car_id"`);
    }

}
