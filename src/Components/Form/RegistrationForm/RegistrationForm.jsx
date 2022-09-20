import { useState } from "react";
import { Formik } from "formik";
import "../css/Form.css";
import { RegistrationSchema } from "../validation/FormSchema";

const RegistrationForm = (props) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        username: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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

          <div className="input-form">
            <label for="mobile">Mobile No</label>
            <input
              type="text"
              name="mobile"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile}
            />
            <div className="error-wrapper">
              <span className="error">
                {errors.mobile && touched.mobile && errors.mobile}
              </span>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            Register
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
