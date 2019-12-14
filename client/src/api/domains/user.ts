import { api } from '../adapter';
import { IUser } from '../../models/IUser';

export class UserDomain {
  userLogin(email: string, password: string) {
    return api.makeRequest('/api/auth/login', 'POST', {
      email,
      password
    });
  }
  userRegister(user: IUser) {
    return api.makeRequest('/api/auth/register', 'POST', user);
  }
  loadCurrentUser() {
    return api.makeRequest('/api/auth/user', 'GET');
  }
  updateUser(user: Partial<IUser>) {
    return api.makeRequest('/api/user', 'PUT', user);
  }
  checkEmailExist(email: string) {
    return api.makeRequest<{ exist: boolean }>(`api/user?email=${email}`, 'GET');
  }
}
export const userDomain = new UserDomain();
