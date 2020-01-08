import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Group from '../entities/Group';
import Mark from '../entities/Mark';
import Order from '../entities/Order';
import OrderKind from '../entities/OrderKind';

@EntityRepository(OrderKind)
export default class OrderKindRepository extends BaseRepository<OrderKind> {
}
