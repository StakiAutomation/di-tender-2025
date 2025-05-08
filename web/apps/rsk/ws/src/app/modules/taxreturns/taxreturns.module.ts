import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import { TaxReturnsResolver } from "./taxreturns.resolver";
import { TaxReturnsService } from "./taxreturns.service";
import { ApplicationModel } from "../../dbmodels/application.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [
    SequelizeModule.forFeature([ApplicationModel]),
    HttpModule,
  ],
  providers: [TaxReturnsResolver, TaxReturnsService],
  exports: [TaxReturnsService],
})
export class TaxReturnsModule {}
