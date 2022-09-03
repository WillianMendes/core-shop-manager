import { Module } from '@nestjs/common';
import { CustomerController } from './controller/controller/v1/customer.controller';
import { ControllerService } from './controller/service/controller.service';

@Module({
  controllers: [CustomerController],
  providers: [ControllerService]
})
export class CustomerModule {}
