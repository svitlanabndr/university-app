import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { FinanceName } from "../../common/enums/FinanceName";
import Student from './Student';

@Entity()
export default class SFinance extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  financeName: FinanceName;

  @OneToMany(type => Student, students => students.finance)
  students: Student[];
}
