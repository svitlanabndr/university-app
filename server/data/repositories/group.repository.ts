import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Group from '../entities/Group';

@EntityRepository(Group)
export default class GroupRepository extends BaseRepository<Group> {
}
