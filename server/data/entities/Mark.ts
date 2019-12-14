import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import StudentMark from "./StudentMark";

@Entity()
export default class Mark extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  markName: string;

  @OneToMany(type => StudentMark, studentMarks => studentMarks.mark)
  studentMarks: StudentMark[];
}
