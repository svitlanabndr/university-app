import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import StudentMark from "./StudentMark";
import { ViolationKindName } from "../../common/enums/ViolationKindName";
import Violation from "./Violation";

@Entity()
export default class ViolationKind extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  violationKindName: ViolationKindName;

  @OneToMany(type => Violation, violations => violations.violationKind)
  violations: Violation[];
}
