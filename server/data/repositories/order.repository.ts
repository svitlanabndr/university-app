import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Group from '../entities/Group';
import Mark from '../entities/Mark';
import Order from '../entities/Order';

@EntityRepository(Order)
export default class OrderRepository extends BaseRepository<Order> {
}
