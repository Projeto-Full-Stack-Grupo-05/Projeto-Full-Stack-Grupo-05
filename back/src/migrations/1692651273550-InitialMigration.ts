import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692651273550 implements MigrationInterface {
    name = 'InitialMigration1692651273550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand_name" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "models" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model_name" character varying NOT NULL, "market_price" double precision NOT NULL, "year" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "brandId" uuid, CONSTRAINT "PK_ef9ed7160ea69013636466bf2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" character varying NOT NULL, "fuel" character varying NOT NULL DEFAULT 'flex', "createdAt" date NOT NULL DEFAULT now(), "brandId" uuid, "modelId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "car_id" character varying NOT NULL, "title" character varying NOT NULL, "img_url" character varying NOT NULL, "color" character varying NOT NULL, "price" integer NOT NULL, "fuel" character varying NOT NULL, "year" integer NOT NULL, "description" character varying NOT NULL, "kilometers" integer NOT NULL, "status" character varying NOT NULL DEFAULT 'active', "createdAt" date NOT NULL DEFAULT now(), "sellerId" uuid, "carId" uuid, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cellphone" character varying(20) NOT NULL, "birthdate" character varying NOT NULL, "description" character varying NOT NULL, "cpf" character varying NOT NULL, "profile" character varying NOT NULL DEFAULT 'buyer', "resetToken" character varying, "createdAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying(6) NOT NULL, "complement" character varying NOT NULL, "updatedAt" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sales_galleries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" date NOT NULL DEFAULT now(), "saleId" uuid, "galleryId" uuid, CONSTRAINT "PK_4eabe3703e01322f88a42b632a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "galleries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img_url" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_86b77299615c92db3d68c9c7919" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "FK_1f36b4eb435f410c6749378cf8c" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_cf9b1f1ecfc160c61dbbe15995f" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_415edcdb4b9eaeb5dd6ee266590" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_5e42712da412943bdd4e2c08617" FOREIGN KEY ("sellerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_1728ba777ce2bc807e7a73164cb" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales_galleries" ADD CONSTRAINT "FK_22631d416320f2393449926509b" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales_galleries" ADD CONSTRAINT "FK_5a10693cee21400e200222aed7c" FOREIGN KEY ("galleryId") REFERENCES "galleries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_galleries" DROP CONSTRAINT "FK_5a10693cee21400e200222aed7c"`);
        await queryRunner.query(`ALTER TABLE "sales_galleries" DROP CONSTRAINT "FK_22631d416320f2393449926509b"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_1728ba777ce2bc807e7a73164cb"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_5e42712da412943bdd4e2c08617"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_415edcdb4b9eaeb5dd6ee266590"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_cf9b1f1ecfc160c61dbbe15995f"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "FK_1f36b4eb435f410c6749378cf8c"`);
        await queryRunner.query(`DROP TABLE "galleries"`);
        await queryRunner.query(`DROP TABLE "sales_galleries"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "models"`);
        await queryRunner.query(`DROP TABLE "brands"`);
    }

}
