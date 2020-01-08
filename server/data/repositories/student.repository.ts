import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Student from '../entities/Student';

@EntityRepository(Student)
export default class StudentRepository extends BaseRepository<Student> {
}
