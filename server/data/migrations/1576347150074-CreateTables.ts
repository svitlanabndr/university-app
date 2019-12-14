import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1576347150074 implements MigrationInterface {
    name = 'CreateTables1576347150074'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "person" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "surname" character varying, "name" character varying, "patronymic" character varying, "birthDate" TIMESTAMP, "sex" character varying, "birthPlace" character varying, "address" character varying, "telephone" character varying, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "payment" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "paymentDate" TIMESTAMP, "paymentSum" integer, "documentNo" character varying, "contractId" integer, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "s_contract_kind" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "contractKindName" character varying, CONSTRAINT "PK_5a7ea1298d61976ff080692f475" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "contract" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "payerKind" character varying, "studentId" integer, "contractKindId" integer, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "s_finance" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "financeName" character varying, CONSTRAINT "PK_e0772cd4024ac71a5c7dcecaddf" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "mark" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "markName" character varying, CONSTRAINT "PK_0c6d4afd73cc2b4eee5a926aafc" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "student_mark" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "studentId" integer, "markId" integer, CONSTRAINT "PK_bd4538b1b76ccdb9f68c32f6f4e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "diploma" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "diplomaName" character varying, CONSTRAINT "PK_17fdb808898615d3fb807644165" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "student" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "bookNo" character varying, "note" character varying, "personId" integer, "financeId" integer, "diplomaId" integer, CONSTRAINT "REL_1314dc48b129d9a708d996d642" UNIQUE ("personId"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "student_group" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "studentId" integer, "groupId" integer, CONSTRAINT "PK_1bd5a468c54488b86d50a117f15" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "group" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "groupCode" character varying, "specialityId" integer, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "speciality" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "specialityShifr" character varying, "specialityName" character varying, "cafedraId" integer, CONSTRAINT "PK_cfdbcfa372a34f2d9c1d5180052" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "faculty" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "facultyName" character varying, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cafedra" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "cafedraShifr" character varying, "cafedraName" character varying, "facultyId" integer, CONSTRAINT "PK_25d85954bf64ba1c3aca91c8630" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_c1df8de04d7066a79ba54031aec" FOREIGN KEY ("contractId") REFERENCES "contract"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_2624bb1fc232a7f143983bf3fe2" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_dd77d95b5ca3cb4750a4155609a" FOREIGN KEY ("contractKindId") REFERENCES "s_contract_kind"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "FK_5bd39fa3913703e43e36f1a7239" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" ADD CONSTRAINT "FK_12b7e278259d8039c432e6d6cd8" FOREIGN KEY ("markId") REFERENCES "mark"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_1314dc48b129d9a708d996d6421" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_548c48380b34fda97af5b051ec1" FOREIGN KEY ("financeId") REFERENCES "s_finance"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_0cb26f1d4a505fb4359a41b2cbb" FOREIGN KEY ("diplomaId") REFERENCES "diploma"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "FK_99f0c9a12e1c8db9636fc6a1a4c" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" ADD CONSTRAINT "FK_768b85327b430c3cb21d32acf3a" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_97c9f3b61119ccfd0281a3a0f99" FOREIGN KEY ("specialityId") REFERENCES "speciality"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "speciality" ADD CONSTRAINT "FK_3519ea1f3792b083fb38774a716" FOREIGN KEY ("cafedraId") REFERENCES "cafedra"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "cafedra" ADD CONSTRAINT "FK_d3ace3a5f6a179c379b53f1552f" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "cafedra" DROP CONSTRAINT "FK_d3ace3a5f6a179c379b53f1552f"`, undefined);
        await queryRunner.query(`ALTER TABLE "speciality" DROP CONSTRAINT "FK_3519ea1f3792b083fb38774a716"`, undefined);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_97c9f3b61119ccfd0281a3a0f99"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "FK_768b85327b430c3cb21d32acf3a"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_group" DROP CONSTRAINT "FK_99f0c9a12e1c8db9636fc6a1a4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_0cb26f1d4a505fb4359a41b2cbb"`, undefined);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_548c48380b34fda97af5b051ec1"`, undefined);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_1314dc48b129d9a708d996d6421"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "FK_12b7e278259d8039c432e6d6cd8"`, undefined);
        await queryRunner.query(`ALTER TABLE "student_mark" DROP CONSTRAINT "FK_5bd39fa3913703e43e36f1a7239"`, undefined);
        await queryRunner.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_dd77d95b5ca3cb4750a4155609a"`, undefined);
        await queryRunner.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_2624bb1fc232a7f143983bf3fe2"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_c1df8de04d7066a79ba54031aec"`, undefined);
        await queryRunner.query(`DROP TABLE "cafedra"`, undefined);
        await queryRunner.query(`DROP TABLE "faculty"`, undefined);
        await queryRunner.query(`DROP TABLE "speciality"`, undefined);
        await queryRunner.query(`DROP TABLE "group"`, undefined);
        await queryRunner.query(`DROP TABLE "student_group"`, undefined);
        await queryRunner.query(`DROP TABLE "student"`, undefined);
        await queryRunner.query(`DROP TABLE "diploma"`, undefined);
        await queryRunner.query(`DROP TABLE "student_mark"`, undefined);
        await queryRunner.query(`DROP TABLE "mark"`, undefined);
        await queryRunner.query(`DROP TABLE "s_finance"`, undefined);
        await queryRunner.query(`DROP TABLE "contract"`, undefined);
        await queryRunner.query(`DROP TABLE "s_contract_kind"`, undefined);
        await queryRunner.query(`DROP TABLE "payment"`, undefined);
        await queryRunner.query(`DROP TABLE "person"`, undefined);
    }

}
