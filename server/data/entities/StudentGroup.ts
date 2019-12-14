import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  RelationId
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Student from './Student';
import Group from "./Group";

@Entity()
export default class StudentGroup extends AbstractEntity {
  @ManyToOne(type => Student, student => student.studentGroups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true
  })
  @JoinColumn()
  student: Student;
  @RelationId((studentGroup: StudentGroup) => studentGroup.student)
  readonly studentId: number;

  @ManyToOne(type => Group, group => group.studentGroups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true
  })
  @JoinColumn()
  group: Group;
  @RelationId((studentGroup: StudentGroup) => studentGroup.group)
  readonly groupId: number;
}
