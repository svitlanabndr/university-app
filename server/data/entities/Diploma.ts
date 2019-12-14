import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { DiplomaName } from "../../common/enums/DiplomaName";
import Student from './Student';

@Entity()
export default class Diploma extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  diplomaName: DiplomaName;

  @OneToMany(type => Student, students => students.diploma)
  students: Student[];
}
