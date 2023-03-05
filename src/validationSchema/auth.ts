import * as Yup from "yup";

export const validateSignup = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name too short")
    .max(25, "First name must not be longer than 25 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(3, "Last name too short")
    .max(25, "Last name must not be longer than 25 characters")
    .required("Last name is required"),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be 6 characters minimum")
    .max(12, "Password should be 12 characters maximum"),
});

export const validateLogin = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be 6 characters minimum")
    .max(12, "Password should be 12 characters maximum"),
});

export const phoneNumberValidate = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(\+[\d]{2,3})?[0-9]{10,11}$/, "Must match 08023456789")
    .required("Phone number is required"),
});

export const validateEmail = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export const validatePassword = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be 6 characters minimum")
    .max(12, "Password should be 12 characters maximum"),
});

export const validateOffers = Yup.object().shape({
  location: Yup.string()
    .required("Location is required")
    .min(3, "Location should be 3 characters minimum"),
  destination: Yup.string()
    .required("Destination is required")
    .min(3, "Destination should be 3 characters minimum"),
  amount: Yup.number().required("Amount is required"),
});
