import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Payment from '../entities/Payment';
import Person from '../entities/Person';
import PersonPrivilege from '../entities/PersonPrivilege';
import Privilege from '../entities/Privilege';
import SContractKind from '../entities/SContractKind';
import SFinance from '../entities/SFinance';

@EntityRepository(SFinance)
export default class SFinanceRepository extends BaseRepository<SFinance> {
}
