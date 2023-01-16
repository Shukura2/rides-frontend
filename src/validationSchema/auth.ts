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
