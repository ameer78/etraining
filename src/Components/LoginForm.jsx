import { Formik } from "formik";
import { SignupSchema } from "./validation";
import "./login.css";

// TODO:: refactor validation

<style>


</style>;
const LoginForm = () => {
  // Fields: Email , Password
  return (
    <div className="form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
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
          <center>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <br></br>
              {errors.email && touched.email && errors.email}
              <br></br>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <br></br>
              {errors.password && touched.password && errors.password}
              <br></br>
              <button className="Button" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          </center>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
