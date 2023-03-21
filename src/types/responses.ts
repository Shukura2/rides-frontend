export interface JoinOffers {
  ride_offer_id: string;
  driver_first_name: string;
  driver_last_name: string;
  driver_phone_number: string;
  driver_profile_pic: string;
  amount: number;
  location: string;
  destination: string;
}

export interface OffersResponse {
  message: JoinOffers[];
  page: number;
  size: number;
  success: boolean;
  totalSize: number;
}

export interface SelectedJoin {
  amount: number;
  destination: string;
  driverFirstName: string;
  driverLastName: string;
  driverPhoneNumber: string;
  driverProfilePic: string;
  location: string;
}

export interface responseType {
  message: string;
  success: boolean;
}

export interface Joins {
  message: {
    amount: number;
    destination: string;
    driverFirstName: string;
    driverLastName: string;
    driverPhoneNumber: string;
    driverProfilePic: string;
    location: string;
  };
  success: boolean;
}

export interface OffersResponseType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePic: string;
}

export interface OfferDataType {
  message: OffersResponseType;
}

export interface rideHistoryType {
  amount: number;
  created_at: Date;
  destination: string;
  driver_first_name: string;
  driver_profile_pic: string;
  location: string;
}

export interface historyType {
  message: rideHistoryType[];
  success: boolean;
}

export interface MyOffer {
  amount: number;
  created_at: string;
  destination: string;
  location: string;
  ride_offer_id: string;
  status: string;
}

export interface MyOfferType {
  message: MyOffer[];
  success: boolean;
}

export interface OpenType {
  open: boolean;
  setOpen: (show: boolean) => void;
}

export type userStateProps = {
  message: string;
  success: boolean;
  token?: string;
  userInfo?: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profilePic: string;
    userId: string;
    userType: string;
  };
};

export type initialStateProp = {
  error: string;
  success: boolean;
  user: {
    message: string;
    success: boolean;
    token?: string;
    userInfo?: {
      email: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      profilePic: string;
      userId: string;
      userType: string;
    };
  };
};