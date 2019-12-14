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
import { PayerKind } from "../../common/enums/PayerKind";
import Student from './Student';
import Payment from './Payment';
import SContractKind from './SContractKind';

@Entity()
export default class Contract extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  payerKind: PayerKind;

  @OneToMany(type => Payment, payment => payment.contract)
  payments: Payment[];

  @ManyToOne(type => Student, student => student.contracts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  student: Student;
  @RelationId((contract: Contract) => contract.student)
  readonly studentId: number;

  @ManyToOne(type => SContractKind, contractKind => contractKind.contracts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  contractKind: SContractKind;
  @RelationId((contract: Contract) => contract.contractKind)
  readonly contractKindId: number;
}
