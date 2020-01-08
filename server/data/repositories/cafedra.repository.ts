import User  from '../entities/Person';
import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Cafedra from '../../data/entities/Cafedra';

@EntityRepository(Cafedra)
export default class CafedraRepository extends BaseRepository<Cafedra> {
}
