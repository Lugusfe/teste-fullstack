interface AddressRequest {
  address: string;

  number?: string;

  extra_information?: string;

  district: string;

  city: string;

  state: string;

  country: string;

  latitude: number;

  longitude: number;
}

export interface CreateDeliveryRequest {
  client: string;

  weight: number;

  address: AddressRequest;
}
