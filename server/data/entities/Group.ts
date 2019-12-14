import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
  RelationId
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import StudentGroup from "./StudentGroup";
import Speciality from "./Speciality";

@Entity()
export default class Group extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  groupCode: string;

  @OneToMany(type => StudentGroup, studentGroups => studentGroups.group)
  studentGroups: StudentGroup[];

  @ManyToOne(type => Speciality, speciality => speciality.groups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  speciality: Speciality;
  @RelationId((group: Group) => group.speciality)
  readonly specialityId: number;
}
