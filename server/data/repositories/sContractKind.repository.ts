import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Payment from '../entities/Payment';
import Person from '../entities/Person';
import PersonPrivilege from '../entities/PersonPrivilege';
import Privilege from '../entities/Privilege';
import SContractKind from '../entities/SContractKind';

@EntityRepository(SContractKind)
export default class SContractKindRepository extends BaseRepository<SContractKind> {
}
