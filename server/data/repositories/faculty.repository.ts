import User  from '../entities/Person';
import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Contract from '../entities/Contract';
import Diploma from '../entities/Diploma';
import Faculty from '../entities/Faculty';

@EntityRepository(Faculty)
export default class FacultyRepository extends BaseRepository<Faculty> {
}
