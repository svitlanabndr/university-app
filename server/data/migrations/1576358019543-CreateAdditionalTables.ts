import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAdditionalTables1576358019543 implements MigrationInterface {
    name = 'CreateAdditionalTables1576358019543'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "violation_kind" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "violationKindName" character varying, CONSTRAINT "PK_5cb940d145bce1c622247446ad5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "order_kind" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "orderKindName" character varying, CONSTRAINT "PK_4723075b21009b858e6b9d98bb9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "order" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "orderDate" TIMESTAMP, "orderNo" character varying, "orderText" character varying, "orderKindId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "violation" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "violationDate" TIMESTAMP, "personId" integer, "violationKindId" integer, "orderId" integer, CONSTRAINT "PK_b4f833198cf98062eca084418eb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "privilege" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "privilegeName" character varying, CONSTRAINT "PK_b1691196ff9c996998bab2e406e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "person_privilege" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "privBeginDate" TIMESTAMP, "privEndDate" TIMESTAMP, "ground" character varying, "personId" integer NOT NULL, "privilegeId" integer NOT NULL, CONSTRAINT "PK_c2e951fadf4f726655344547ab7" PRIMARY KEY ("personId", "privilegeId"))`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "PK_bd4538b1b76ccdb9f68c32f6f4e"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "PK_1bd5a468c54488b86d50a117f15"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "PK_89004b63783e7cef73f72fe6871" PRIMARY KEY ("studentId", "markId")`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "PK_852b6f94472c9510c95a2f958d4" PRIMARY KEY ("studentId", "groupId")`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "FK_5bd39fa3913703e43e36f1a7239"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "FK_12b7e278259d8039c432e6d6cd8"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ALTER COLUMN "studentId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ALTER COLUMN "markId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "FK_99f0c9a12e1c8db9636fc6a1a4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "FK_768b85327b430c3cb21d32acf3a"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ALTER COLUMN "studentId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ALTER COLUMN "groupId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_822048f64a43af87fa6719d7626" FOREIGN KEY ("orderKindId") REFERENCES "order_kind"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "violation" ADD CONSTRAINT "FK_d644fcbcdf8d5966b3acef62ad3" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "violation" ADD CONSTRAINT "FK_6738a12e5b26e68f7194462103e" FOREIGN KEY ("violationKindId") REFERENCES "violation_kind"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "violation" ADD CONSTRAINT "FK_20b28890d0c45d3638bff8d0003" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "person_privilege" ADD CONSTRAINT "FK_8fe2870a27b0a308b492b870d66" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "person_privilege" ADD CONSTRAINT "FK_907f9e7d1bf94d4604425cd5236" FOREIGN KEY ("privilegeId") REFERENCES "privilege"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "FK_5bd39fa3913703e43e36f1a7239" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "FK_12b7e278259d8039c432e6d6cd8" FOREIGN KEY ("markId") REFERENCES "mark"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "FK_99f0c9a12e1c8db9636fc6a1a4c" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "FK_768b85327b430c3cb21d32acf3a" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "FK_768b85327b430c3cb21d32acf3a"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "FK_99f0c9a12e1c8db9636fc6a1a4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "FK_12b7e278259d8039c432e6d6cd8"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "FK_5bd39fa3913703e43e36f1a7239"`, undefined);
        await queryRunner.query(`ALTER TABLE "person_privilege" DROP CONSTRAINT "FK_907f9e7d1bf94d4604425cd5236"`, undefined);
        await queryRunner.query(`ALTER TABLE "person_privilege" DROP CONSTRAINT "FK_8fe2870a27b0a308b492b870d66"`, undefined);
        await queryRunner.query(`ALTER TABLE "violation" DROP CONSTRAINT "FK_20b28890d0c45d3638bff8d0003"`, undefined);
        await queryRunner.query(`ALTER TABLE "violation" DROP CONSTRAINT "FK_6738a12e5b26e68f7194462103e"`, undefined);
        await queryRunner.query(`ALTER TABLE "violation" DROP CONSTRAINT "FK_d644fcbcdf8d5966b3acef62ad3"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_822048f64a43af87fa6719d7626"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ALTER COLUMN "groupId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ALTER COLUMN "studentId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "FK_768b85327b430c3cb21d32acf3a" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "FK_99f0c9a12e1c8db9636fc6a1a4c" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ALTER COLUMN "markId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ALTER COLUMN "studentId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "FK_12b7e278259d8039c432e6d6cd8" FOREIGN KEY ("markId") REFERENCES "mark"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "FK_5bd39fa3913703e43e36f1a7239" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "PK_852b6f94472c9510c95a2f958d4"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "PK_89004b63783e7cef73f72fe6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "PK_1bd5a468c54488b86d50a117f15" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "PK_bd4538b1b76ccdb9f68c32f6f4e" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`DROP TABLE "person_privilege"`, undefined);
        await queryRunner.query(`DROP TABLE "privilege"`, undefined);
        await queryRunner.query(`DROP TABLE "violation"`, undefined);
        await queryRunner.query(`DROP TABLE "order"`, undefined);
        await queryRunner.query(`DROP TABLE "order_kind"`, undefined);
        await queryRunner.query(`DROP TABLE "violation_kind"`, undefined);
    }

}
