import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedCitizenTable1578510525795 implements MigrationInterface {
    name = 'CreatedCitizenTable1578510525795'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "scitizen" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "citizenName" character varying, CONSTRAINT "PK_ce1660494d6bf2761710d346e7b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "person" ADD "citizenId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "mark" DROP COLUMN "markName"`, undefined);
        await queryRunner.query(`ALTER TABLE "mark" ADD "markName" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_54a67199d8fb0246b10e4049d41" FOREIGN KEY ("citizenId") REFERENCES "scitizen"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_54a67199d8fb0246b10e4049d41"`, undefined);
        await queryRunner.query(`ALTER TABLE "mark" DROP COLUMN "markName"`, undefined);
        await queryRunner.query(`ALTER TABLE "mark" ADD "markName" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "citizenId"`, undefined);
        await queryRunner.query(`DROP TABLE "scitizen"`, undefined);
    }

}
