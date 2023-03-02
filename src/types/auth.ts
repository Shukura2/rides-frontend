export interface FormValues {
  [key: string]: string;
}

export interface SnackbarTypes {
  open: boolean;
  autoHideDuration: number;
  onClose: any;
  severity: any;
  variant: any;
  message: string;
}

export interface LoginValues {
  [key: string]: string;
}

export interface Data {
  userInfo: {
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
  };
  iat: number;
  exp: number;
}

export interface inputValue {
  password: string;
  token: string | any;
}
