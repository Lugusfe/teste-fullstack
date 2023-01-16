import { Addresses, Deliveries } from '@prisma/client';

export type AllDeliveries = (Deliveries & {
  address: Addresses;
})[];
