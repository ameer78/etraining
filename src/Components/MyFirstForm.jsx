import { useState } from "react";
import { Formik } from 'formik';
import { SignupSchema } from "./validations";

// TODO:: refactor validation
const MyFirstForm = () => {
  // Fields: first name, last name, email, password, confirm password, address.

  return (
    <div>
      <Formik
       initialValues={{ email: '', password: '' }}
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
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label for="firstName">first Name</label>
          <input
            id="firstName"
            name="firstName"
            value={inputs.firstName}
            onInput={handleChange}
          />
          <br />
        </div>
        <div>
          <label for="lastName">last Name</label>
          <input
            id="lastName"
            name="lastName"
            value={inputs.lastName}
            onInput={handleChange}

          />
          <br />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            value={inputs.email}
            onInput={handleChange}
          />
          <br />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={inputs.password}
            onInput={handleChange}
          />
          <br />
        </div>
        <div>
          <label for="confirmPass">confirm Password</label>
          <input
            id="confirmPass"
            name="confirmPass"
            type="password"
            value={inputs.confirmPass}
            onInput={handleChange}
          />
          <br />
        </div>
        <div>
          <label for="address">Address</label>
          <input
            id="address"
            name="address"
            value={inputs.address}
            onInput={handleChange}
          />
          <br />
        </div>

        <input type="submit" value="submit" />
      </form> */}
    </div>
  );
};

export default MyFirstForm;
