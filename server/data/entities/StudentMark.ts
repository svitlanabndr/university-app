import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  RelationId
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Student from './Student';
import Mark from "./Mark";

@Entity()
export default class StudentMark extends AbstractEntity {
  @ManyToOne(type => Student, student => student.studentMarks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true
  })
  @JoinColumn()
  student: Student;
  @RelationId((studentMark: StudentMark) => studentMark.student)
  readonly studentId: number;

  @ManyToOne(type => Mark, mark => mark.studentMarks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true
  })
  @JoinColumn()
  mark: Mark;
  @RelationId((studentMark: StudentMark) => studentMark.mark)
  readonly markId: number;
}
