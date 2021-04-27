import { Module } from '@nestjs/common';
import { databaseProviders } from '@/modules/core/database/providers/database.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
