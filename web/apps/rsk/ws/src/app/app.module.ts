import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'

import {ApolloDriver} from "@nestjs/apollo";
import { environment } from '../environments';
import { NationalRegistryModule } from './modules/nationalRegistry/nationalRegistry.module';
import { TaxReturnsModule } from './modules/taxreturns/taxreturns.module';
import {SequelizeModule} from "@nestjs/sequelize";
import { SequelizeConfigService } from './sequelizeConfig.service';

const debug = !environment.production
const playground = debug || process.env.GQL_PLAYGROUND_ENABLED === 'true'
const autoSchemaFile = environment.production
  ? true
  : 'apps/rsk/api/src/api.graphql'
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      debug,
      playground,
      autoSchemaFile,
      path: '/api/graphql',
      cors: [{
        origin: 'https://di-tender-islandis-web-eu.azurewebsites.net',
        credentials: true,
      },{
        origin: 'http://localhost:4200',
        credentials: true,
      }
      ],

    }),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    NationalRegistryModule,
    TaxReturnsModule
  ],
})
export class AppModule {}
