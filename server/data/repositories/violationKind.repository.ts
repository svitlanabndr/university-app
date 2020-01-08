import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Student from '../entities/Student';
import StudentGroup from '../entities/StudentGroup';
import StudentMark from '../entities/StudentMark';
import Violation from '../entities/Violation';
import ViolationKind from '../entities/ViolationKind';

@EntityRepository(ViolationKind)
export default class ViolationKindRepository extends BaseRepository<ViolationKind> {
}
