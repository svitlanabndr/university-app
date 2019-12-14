import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Person from "./Person";
import Privilege from "./Privilege";
import { PrivilegeGround } from "../../common/enums/PrivilegeGround";

@Entity()
export default class PersonPrivilege extends AbstractEntity {
  @Column({
    nullable: true
  })
  privBeginDate: Date;

  @Column({
    nullable: true
  })
  privEndDate: Date;

  @Column({
    nullable: true
  })
  ground: PrivilegeGround;

  @ManyToOne(type => Person, person => person.personPrivileges, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true
  })
  @JoinColumn()
  person: Person;
  @RelationId((personPrivilege: PersonPrivilege) => personPrivilege.person)
  readonly personId: number;

  @ManyToOne(type => Privilege, privilege => privilege.personPrivileges, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true
  })
  @JoinColumn()
  privilege: Privilege;
  @RelationId((personPrivilege: PersonPrivilege) => personPrivilege.privilege)
  readonly privilegeId: number;
}
