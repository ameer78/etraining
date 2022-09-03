import { useState } from "react";
import { Formik } from "formik";
import { RegistrationSchema } from "./RegistrationSchema";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  // Fields: first name, last name, email, password, confirm password, address.

  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
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
          <form onSubmit={handleSubmit} className="reg-form">
            <div className="input-form">
              <label for="firstName">First Name</label>
              <input
                type="firstName"
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
                type="lastName"
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
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
