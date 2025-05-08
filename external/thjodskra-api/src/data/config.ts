import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { NationalRegistry } from '@national-registry-api/entities/national-registry.entity';
import { Address } from '@national-registry-api/entities/address.entity';
import { Gender } from '@national-registry-api/entities/gender.entity';
import { Type } from '@national-registry-api/entities/type.entity';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [NationalRegistry, Address, Gender, Type],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
