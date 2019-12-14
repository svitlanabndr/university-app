import { getCustomRepository } from 'typeorm';
import UserRepository from '../../data/repositories/user.repository';
import cryptoHelper from '../../helpers/crypto.helper';
import { IUser } from 'common/models/user/IUser';
import User from '../../data/entities/User';
import AgencyRepository from '../../data/repositories/agency.repository';
import { Type } from '../../common/enums/type';
import ClientRepository from '../../data/repositories/client.repository';

export const getUserTypeById = async (id: number) => {
  const { type } = await getCustomRepository(UserRepository).findOne(id);
  return type;
};

export const getUserCompany = async (user: Partial<User>) => {
  switch (user.type) {
    case Type.Agency:
      return await getCustomRepository(AgencyRepository).getAgencyByUserId(user.id);
    case Type.Client:
      return await getCustomRepository(ClientRepository).getClientByUserId(user.id);
    default:
      return undefined;
  }
};

export const deleteUser = async (userIds: number[]) => {
  await getCustomRepository(UserRepository).deleteUser(userIds);
};

export const updateUser = async (user: Partial<IUser>, id: number) => {
  await getCustomRepository(UserRepository).save({ id, ...user });
};

export const changePassword = async (passwords, user) => {
  const { oldPassword, newPassword } = passwords;
  if (!await cryptoHelper.compare(oldPassword, user.password)) {
    throw new Error('profile:clientProfile.wrongPasswordErr');
  }
  return await getCustomRepository(UserRepository).changePassword(newPassword, user.id);
};

export const checkEmailExist = async (user: Partial<IUser>) => {
  const isUser = await getCustomRepository(UserRepository).findOne(user);
  return { exist: !!isUser };
}
