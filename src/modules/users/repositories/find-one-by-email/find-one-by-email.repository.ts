import { USER_REPOSITORY } from '@/modules/core/database/constantes';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../model/user.model';

@Injectable()
export class FindOneByEmailRepository {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async execute(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }
}
