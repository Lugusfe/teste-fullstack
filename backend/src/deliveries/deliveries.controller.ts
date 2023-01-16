import { Controller, Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Deliveries } from '@prisma/client';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryRequest } from './dto/create-delivery.dto';
import { AllDeliveries } from './dto/get-all-deliveries.dto';

@Controller('/deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post('/create')
  async createDelivery(
    @Body() deliveryPayload: CreateDeliveryRequest,
  ): Promise<Deliveries> {
    return await this.deliveriesService.createDelivery(deliveryPayload);
  }

  @Get('/get-all')
  async getAllDeliveries(): Promise<AllDeliveries> {
    return await this.deliveriesService.getAllDeliveries();
  }
}
