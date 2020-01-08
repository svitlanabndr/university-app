import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Payment from '../entities/Payment';
import Person from '../entities/Person';
import PersonPrivilege from '../entities/PersonPrivilege';
import Privilege from '../entities/Privilege';

@EntityRepository(Privilege)
export default class PrivilegeRepository extends BaseRepository<Privilege> {
}
