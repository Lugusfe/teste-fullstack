import { api } from "$services/api";
import { CreateDeliveryRequest } from "./types";

export async function createDelivery(data: CreateDeliveryRequest) {
  const response = await api.post<CreateDeliveryRequest>(
    "/deliveries/create",
    data
  );

  console.log(response.data);
  return response.data;
}
