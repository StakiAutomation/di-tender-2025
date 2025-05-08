import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import {
  TaxReturn,
  TaxPayer,
  Person,
  Asset,
  Income,
  Debt,
  Status,
  AssetType,
  DebtType,
  FormField,
  FormFieldGroup,
  Form,
} from '../entities';

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
  entities: [
    TaxReturn,
    TaxPayer,
    Person,
    Asset,
    Income,
    Debt,
    Status,
    AssetType,
    DebtType,
    FormField,
    FormFieldGroup,
    Form,
  ],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
