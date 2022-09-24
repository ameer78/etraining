import { useState } from "react";
import { Formik } from "formik";
import "../css/Form.css";
import { RegistrationSchema } from "../validation/FormSchema";
import { register } from "../../../slices/auth";
import { useDispatch } from "react-redux";



const RegistrationForm = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleRegister = (formValue) => {
    setLoading(true);
    const { email, password, confirmPassword } = formValue;
    dispatch(register({ email, password, confirmPassword }))
      .unwrap()
      .then(() => {
        // props.history.push("/profile");
        setLoading(false);
        alert("Registered successfully");
        // window.location.reload();
        if(props.setNoAccount){
          props.setNoAccount(false);
        }
      })
      .catch(() => {
        setLoading(false);
        alert("Invalid Data");
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={handleRegister}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="form">
          <h2>Sign up</h2>
          <div className="input-form">
            <label for="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />

            <div className="error-wrapper">
              <span className="error">
                {errors.firstName && touched.firstName && errors.firstName}
              </span>
            </div>
          </div>

          <div className="input-form">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <div className="error-wrapper">
              <span className="error">
                {errors.lastName && touched.lastName && errors.lastName}
              </span>
            </div>
          </div>

          <div className="input-form">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <div className="error-wrapper">
              <span className="error">
                {errors.username && touched.username && errors.username}
              </span>
            </div>
          </div>

          <div className="input-form">
            <label for="password">Password</label>
            <input
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

          <div className="input-form">
            <label for="confirmPassword">Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <div className="error-wrapper">
              <span className="error">
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              </span>
            </div>
          </div>

          <div className="input-form">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
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


          <button type="submit" className="submit-btn" >
            Register
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
