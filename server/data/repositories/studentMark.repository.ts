import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Student from '../entities/Student';
import StudentGroup from '../entities/StudentGroup';
import StudentMark from '../entities/StudentMark';

@EntityRepository(StudentMark)
export default class StudentMarkRepository extends BaseRepository<StudentMark> {
}
