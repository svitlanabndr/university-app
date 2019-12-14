import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Sex } from '../../common/enums/Sex';
import Student from './Student';
import Violation from './Violation';
import PersonPrivilege from './PersonPrivilege';
  
@Entity()
export default class Person extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  surname: string;

  @Column({
    nullable: true
  })
  name: string;

  @Column({
    nullable: true
  })
  patronymic: string;

  @Column({
    nullable: true
  })
  birthDate: Date;

  @Column({
    nullable: true
  })
  sex: Sex;

  @Column({
    nullable: true
  })
  birthPlace: string;

  @Column({
    nullable: true
  })
  address: string;

  @Column({
    nullable: true
  })
  telephone: string;

  @OneToOne(type => Student, student => student.person)
  student: Student;

  @OneToMany(type => Violation, violations => violations.person)
  violations: Violation[];

  @OneToMany(type => PersonPrivilege, personPrivileges => personPrivileges.person)
  personPrivileges: PersonPrivilege[];
}
