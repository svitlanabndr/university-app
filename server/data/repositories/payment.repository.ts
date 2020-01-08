import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';
import Payment from '../entities/Payment';

@EntityRepository(Payment)
export default class PaymentRepository extends BaseRepository<Payment> {
}
