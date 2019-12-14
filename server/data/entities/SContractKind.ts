import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { ContractKindName } from "../../common/enums/ContractKindName";
import Contract from "./Contract";

@Entity()
export default class SContractKind extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  contractKindName: ContractKindName;

  @OneToMany(type => Contract, contracts => contracts.contractKind)
  contracts: Contract[];
}
