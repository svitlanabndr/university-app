import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Group from '../entities/Group';
import Scitizen from '../entities/SCitizen';

@EntityRepository(Scitizen)
export default class ScitizenRepository extends BaseRepository<Scitizen> {
}
