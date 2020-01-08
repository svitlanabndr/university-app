import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Group from '../entities/Group';
import Mark from '../entities/Mark';

@EntityRepository(Mark)
export default class MarkRepository extends BaseRepository<Mark> {
}
