import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
  RelationId
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Person from "./Person";
import Contract from './Contract';
import Finance from './SFinance';
import StudentGroup from './StudentGroup';
import StudentMark from './StudentMark';
import Diploma from './Diploma';

@Entity()
export default class Student extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  bookNo: string;

  @Column({
    nullable: true
  })
  note: string;

  @OneToOne(type => Person, person => person.student)
  @JoinColumn()
  person: Person;

  @OneToMany(type => Contract, contracts => contracts.student)
  contracts: Contract[];

  @OneToMany(type => StudentGroup, studentGroups => studentGroups.student)
  studentGroups: StudentGroup[];

  @OneToMany(type => StudentMark, studentMarks => studentMarks.student)
  studentMarks: StudentMark[];

  @ManyToOne(type => Finance, finance => finance.students, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true
  })
  @JoinColumn()
  finance: Finance;
  @RelationId((student: Student) => student.finance)
  readonly financeId: number;

  @ManyToOne(type => Diploma, diploma => diploma.students, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true
  })
  @JoinColumn()
  diploma: Diploma;
  @RelationId((student: Student) => student.diploma)
  readonly diplomaId: number;
}
