import User  from '../entities/User';
import { EntityRepository } from 'typeorm';
import BaseRepository from './base.repository';

@EntityRepository(User)
class UserRepository extends BaseRepository<User> {
  loadUserWithCompany(userId: number): Promise<User> {
    return this.findOne({
    
      where: { id: userId }
    })
  }
}

export default UserRepository;
