import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  username: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Username is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is Required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please Enter Email"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Please Enter Your Password"),
});
