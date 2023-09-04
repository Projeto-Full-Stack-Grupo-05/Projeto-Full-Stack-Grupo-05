import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693865650023 implements MigrationInterface {
    name = 'InitialMigration1693865650023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "galleries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img_url" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "saleId" uuid, CONSTRAINT "PK_86b77299615c92db3d68c9c7919" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."sales_status_enum" AS ENUM('active', 'sold')`);
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "model" character varying NOT NULL, "title" character varying NOT NULL, "img_url" character varying NOT NULL, "color" character varying NOT NULL, "price" integer NOT NULL, "fuel" character varying NOT NULL, "year" integer NOT NULL, "description" character varying NOT NULL, "kilometers" integer NOT NULL, "status" "public"."sales_status_enum" NOT NULL DEFAULT 'active', "createdAt" date NOT NULL DEFAULT now(), "buyer_id" uuid, CONSTRAINT "REL_fb465726b1745ecff7eea073e0" UNIQUE ("buyer_id"), CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "sale_id" uuid, "user_id" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cellphone" character varying(20) NOT NULL, "birthdate" character varying NOT NULL, "description" character varying NOT NULL, "cpf" character varying NOT NULL, "profile" character varying NOT NULL DEFAULT 'buyer', "resetToken" character varying, "createdAt" date NOT NULL DEFAULT now(), "deletedAt" date, "addressId" uuid, CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying(6) NOT NULL, "complement" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "galleries" ADD CONSTRAINT "FK_5d3fffac8b1e3813a9f178ae43f" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_fb465726b1745ecff7eea073e0e" FOREIGN KEY ("buyer_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_5f282f3656814ec9ca2675aef6f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_cc0012e14176feb08c90da209ec" FOREIGN KEY ("sale_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_cc0012e14176feb08c90da209ec"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_5f282f3656814ec9ca2675aef6f"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_fb465726b1745ecff7eea073e0e"`);
        await queryRunner.query(`ALTER TABLE "galleries" DROP CONSTRAINT "FK_5d3fffac8b1e3813a9f178ae43f"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TYPE "public"."sales_status_enum"`);
        await queryRunner.query(`DROP TABLE "galleries"`);
    }

}
