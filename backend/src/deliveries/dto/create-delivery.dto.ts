import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional } from 'class-validator';

class AddressRequest {
  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  number?: string;

  @IsString()
  @IsOptional()
  extra_information?: string;

  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}

export class CreateDeliveryRequest {
  @IsString()
  client: string;

  @IsNumber()
  weight: number;

  @Type(() => AddressRequest)
  @ApiProperty({ type: AddressRequest })
  address: AddressRequest;
}
