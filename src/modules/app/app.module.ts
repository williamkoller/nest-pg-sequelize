import { DatabaseModule } from '@/modules/core/database/database.module';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    forwardRef(() => DatabaseModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
