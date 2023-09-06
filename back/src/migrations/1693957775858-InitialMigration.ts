import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693957775858 implements MigrationInterface {
    name = 'InitialMigration1693957775858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" ADD "brand" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."sales_status_enum" AS ENUM('active', 'sold')`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "status" "public"."sales_status_enum" NOT NULL DEFAULT 'active'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."sales_status_enum"`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "status" character varying NOT NULL DEFAULT 'active'`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "brand"`);
    }

}
