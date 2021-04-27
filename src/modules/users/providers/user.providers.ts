import { USER_REPOSITORY } from '@/modules/core/database/constantes';
import { User } from '@/modules/users/model/user.model';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
