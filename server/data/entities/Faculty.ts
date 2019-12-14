import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Cafedra from "./Cafedra";

@Entity()
export default class Faculty extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  facultyName: string;

  @OneToMany(type => Cafedra, cafedras => cafedras.faculty)
  cafedras: Cafedra[];
}
