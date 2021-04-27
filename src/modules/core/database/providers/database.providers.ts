import { Sequelize } from 'sequelize-typescript';
import {
  SEQUELIZE,
  DEVELOPMENT,
  TEST,
  PRODUCTION,
} from '@/modules/core/database/constantes';
import { databaseConfig } from '@/modules/core/database/config/database.config';
import { User } from '@/modules/users/model/user.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
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
      const sequelize = new Sequelize(config);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
