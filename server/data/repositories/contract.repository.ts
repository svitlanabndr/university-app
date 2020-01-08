import User  from '../entities/Person';
import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Contract from '../entities/Contract';

@EntityRepository(Contract)
export default class ContractRepository extends BaseRepository<Contract> {
}
