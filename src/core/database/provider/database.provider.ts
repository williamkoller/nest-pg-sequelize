import { Sequelize } from 'sequelize-typescript';
import {
  SEQUELIZE,
  DEVELOPMENT,
  TEST,
  PRODUCTION,
} from '@/core/database/constantes';
import { databaseConfig } from '@/core/database/config/database.config';
import { IDatabaseConfigAttributes } from '@/core/database/interface/db-config.interface';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: IDatabaseConfigAttributes;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config as string);
      sequelize.addModels(['models goes here']);
      await sequelize.sync();
      return sequelize;
    },
  },
];
