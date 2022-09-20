import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../slices/auth";
import "../css/Form.css";
import { SignInSchema } from "../validation/FormSchema";

const LoginForm = () => {
  

  const [loading, setLoading] = useState(false);

  // const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  
  const handleLogin = (formValue) => {
    setLoading(true);
    const { email, password } = formValue;
    dispatch(login({ email, password }))
    .unwrap()
    .then(() => {
      // props.history.push("/profile");
      setLoading(false);
      alert("Logged in successfully")
      // window.location.reload();
    })
    .catch(() => {
      setLoading(false);
      alert("Invalid Data")
    });
};

  
  return (
    <div>
      <h2>{message}</h2>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={handleLogin}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        /* and other goodies */
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="input-form">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="error-wrapper">
              <span className="error">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
          </div>
          <div className="input-form">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="error-wrapper">
              <span className="error">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>

  );
};

export default LoginForm;
