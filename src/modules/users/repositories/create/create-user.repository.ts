import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '@/modules/core/database/constantes';
import { UserDto } from '../../dtos/user.dto';
import { User } from '../../model/user.model';

@Injectable()
export class CreateUserRepository {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async execute(user: UserDto): Promise<User> {
    return await this.userRepository.create(user as User);
  }
}
