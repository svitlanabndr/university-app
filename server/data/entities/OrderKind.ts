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

@Entity()
export default class OrderKind extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  orderKindName: OrderKindName;

  @OneToMany(type => Order, orders => orders.orderKind)
  orders: Order[];
}
