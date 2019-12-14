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
import Group from "./Group";
import Cafedra from "./Cafedra";

@Entity()
export default class Speciality extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  specialityShifr: string;

  @Column({
    nullable: true
  })
  specialityName: string;

  @OneToMany(type => Group, groups => groups.speciality)
  groups: Group[];

  @ManyToOne(type => Cafedra, cafedra => cafedra.specialities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  cafedra: Cafedra;
  @RelationId((speciality: Speciality) => speciality.cafedra)
  readonly cafedraId: number;
}
