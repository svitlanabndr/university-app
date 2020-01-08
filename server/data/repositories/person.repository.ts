import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Payment from '../entities/Payment';
import Person from '../entities/Person';

@EntityRepository(Person)
export default class PersonRepository extends BaseRepository<Person> {
}
