import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  RelationId
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import Contract from "./Contract";

@Entity()
export default class Payment extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  paymentDate: Date;

  @Column({
    nullable: true
  })
  paymentSum: number;

  @Column({
    nullable: true
  })
  documentNo: string;

  @ManyToOne(type => Contract, contract => contract.payments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  contract: Contract;
  @RelationId((payment: Payment) => payment.contract)
  readonly contractId: number;
}
