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
import OrderKind from "./OrderKind";
import Violation from "./Violation";

@Entity()
export default class Order extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  orderDate: Date;

  @Column({
    nullable: true
  })
  orderNo: string;

  @Column({
    nullable: true
  })
  orderText: string;

  @OneToMany(type => Violation, violations => violations.order)
  violations: Violation[];

  @ManyToOne(type => OrderKind, orderKind => orderKind.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  orderKind: OrderKind;
  @RelationId((order: Order) => order.orderKind)
  readonly orderKindId: number;
}
