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
import Speciality from "./Speciality";
import Faculty from "./Faculty";

@Entity()
export default class Cafedra extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  cafedraShifr: string;

  @Column({
    nullable: true
  })
  cafedraName: string;

  @OneToMany(type => Speciality, specialities => specialities.cafedra)
  specialities: Speciality[];

  @ManyToOne(type => Faculty, faculty => faculty.cafedras, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  faculty: Faculty;
  @RelationId((cafedra: Cafedra) => cafedra.faculty)
  readonly facultyId: number;
}
