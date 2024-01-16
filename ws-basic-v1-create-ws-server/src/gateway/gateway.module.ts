import { Module } from "@nestjs/common";
import { GateWayController } from "./gateway.controller";
import { GatewayService } from "./gateway.service";

@Module({

    providers: [GateWayController, GatewayService]

})
export class GatewayModule { }