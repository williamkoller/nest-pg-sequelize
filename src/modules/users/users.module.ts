import { Module } from '@nestjs/common';
import { usersProviders } from '@/modules/users/providers/user.providers';
import { CreateUserRepository } from '@/modules/users/repositories/create/create-user.repository';
import { FindOneByEmailRepository } from '@/modules/users/repositories/find-one-by-email/find-one-by-email.repository';
import { FindOneByIdRepository } from '@/modules/users/repositories/find-one-by-id/find-one-by-id.repository';

@Module({
  providers: [
    CreateUserRepository,
    ...usersProviders,
    FindOneByEmailRepository,
    FindOneByIdRepository,
  ],
  exports: [
    CreateUserRepository,
    FindOneByEmailRepository,
    FindOneByIdRepository,
  ],
})
export class UsersModule {}
