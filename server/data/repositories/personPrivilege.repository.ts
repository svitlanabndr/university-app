import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Payment from '../entities/Payment';
import Person from '../entities/Person';
import PersonPrivilege from '../entities/PersonPrivilege';

@EntityRepository(PersonPrivilege)
export default class PersonPrivilegeRepository extends BaseRepository<PersonPrivilege> {
}
