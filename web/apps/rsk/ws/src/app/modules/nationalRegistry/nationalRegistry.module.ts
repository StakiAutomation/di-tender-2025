import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import { NationalRegistryService } from "./nationalRegistry.service";
import { NationalRegistryResolver } from "./nationalRegistry.resolver";

@Module({
  imports: [HttpModule],
  providers: [NationalRegistryResolver, NationalRegistryService],
  exports: [NationalRegistryService],
})
export class NationalRegistryModule {}
