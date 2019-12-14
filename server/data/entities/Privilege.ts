import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Person from "./Person";
import ViolationKind from "./ViolationKind";
import Violation from "./Violation";
import Order from "./Order";
import { OrderKindName } from "../../common/enums/OrderKindName";
import { PrivilegeName } from "../../common/enums/PrivilegeName";
import PersonPrivilege from "./PersonPrivilege";

@Entity()
export default class Privilege extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  privilegeName: PrivilegeName;

  @OneToMany(type => PersonPrivilege, personPrivileges => personPrivileges.privilege)
  personPrivileges: PersonPrivilege[];
}
