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
