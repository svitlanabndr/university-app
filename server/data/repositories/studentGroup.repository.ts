import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Student from '../entities/Student';
import StudentGroup from '../entities/StudentGroup';

@EntityRepository(StudentGroup)
export default class StudentGroupRepository extends BaseRepository<StudentGroup> {
}
