import User  from '../entities/Person';
import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Contract from '../entities/Contract';
import Diploma from '../entities/Diploma';

@EntityRepository(Diploma)
export default class DiplomaRepository extends BaseRepository<Diploma> {
}
