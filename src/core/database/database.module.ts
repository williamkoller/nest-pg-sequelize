import { Module } from '@nestjs/common';
import { databaseProviders } from '@/core/database/provider/database.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
