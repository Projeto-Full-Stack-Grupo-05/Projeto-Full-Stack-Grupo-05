import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692378120226 implements MigrationInterface {
    name = 'InitialMigration1692378120226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "car_id" character varying NOT NULL, "title" character varying NOT NULL, "img_url" character varying NOT NULL, "color" character varying NOT NULL, "price" integer NOT NULL, "fuel" character varying NOT NULL, "year" integer NOT NULL, "description" character varying NOT NULL, "kilometers" integer NOT NULL, "status" character varying NOT NULL DEFAULT 'active', "createdAt" date NOT NULL DEFAULT now(), "sellerId" uuid, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cellphone" character varying(20) NOT NULL, "birthdate" character varying NOT NULL, "description" character varying NOT NULL, "cpf" character varying NOT NULL, "profile" character varying NOT NULL DEFAULT 'buyer', "userImg" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_5e42712da412943bdd4e2c08617" FOREIGN KEY ("sellerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_5e42712da412943bdd4e2c08617"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "sales"`);
    }

}
