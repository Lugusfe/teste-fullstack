import { Injectable } from '@nestjs/common';
import { Deliveries } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeliveryRequest } from './dto/create-delivery.dto';

@Injectable()
export class DeliveriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async createDelivery(body: CreateDeliveryRequest): Promise<Deliveries> {
    const create = await this.prismaService.deliveries.create({
      data: {
        client: body.client,
        weight: body.weight,
        address: {
          create: {
            address: body.address.address,
            number: body.address.number,
            district: body.address.district || null,
            extra_information: body.address.extra_information,
            city: body.address.city,
            state: body.address.state,
            country: body.address.country,
            latitude: body.address.latitude,
            longitude: body.address.longitude,
          },
        },
      },
    });

    return create;
  }

  async getAllDeliveries() {
    const findAll = await this.prismaService.deliveries.findMany({
      include: {
        address: true,
      },
    });

    return findAll;
  }
}
