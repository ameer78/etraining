import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please Enter Email"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Please Enter Your Password"),
});
