import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691527319683 implements MigrationInterface {
    name = 'InitialMigration1691527319683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "car_id" character varying NOT NULL, "title" character varying NOT NULL, "img_url" character varying NOT NULL, "color" character varying NOT NULL, "price" integer NOT NULL, "fuel" character varying NOT NULL, "year" integer NOT NULL, "description" character varying NOT NULL, "kilometers" integer NOT NULL, "status" character varying NOT NULL DEFAULT 'active', "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sales"`);
    }

}
