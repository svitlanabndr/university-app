import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Person from "./Person";
import ViolationKind from "./ViolationKind";
import Order from "./Order";

@Entity()
export default class Violation extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  violationDate: Date;

  @ManyToOne(type => Person, person => person.violations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  person: Person;
  @RelationId((violation: Violation) => violation.person)
  readonly personId: number;

  @ManyToOne(type => ViolationKind, violationKind => violationKind.violations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  violationKind: Person;
  @RelationId((violation: Violation) => violation.violationKind)
  readonly violationKindId: number;

  @ManyToOne(type => Order, order => order.violations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  order: Order;
  @RelationId((violation: Violation) => violation.order)
  readonly orderId: number;
}
