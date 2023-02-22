interface Offers {
  ride_offer_id: string;
  driver_first_name: string;
  driver_last_name: string;
  driver_phone_number: string | null;
  driver_profile_pic: string | null;
  amount: number;
  location: string;
  destination: string;
}

export interface OffersResponse {
  message: Offers[];
  page: number;
  size: number;
  success: boolean;
  totalSize: number;
}
