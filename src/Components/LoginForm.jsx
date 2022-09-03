import { Formik } from "formik";
import { SignupSchema } from "./validation";
import "../login.css";

// TODO:: refactor validation

const LoginForm = () => {
  // Fields: Email , Password
 return (
   <div>
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
         <form className="my-login-form" onSubmit={handleSubmit}>
           <div className="my-input">
             <label for="email">Email</label>
             <input
               type="email"
               name="email"
               id="email"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
             />
             <div className="err-wrapper">
               <span className="err">
                 {errors.email && touched.email && errors.email}
               </span>
             </div>
           </div>
           <div className="my-input">
             <label for="password">Password</label>
             <input
               id="password"
               type="password"
               name="password"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.password}
             />
             <div className="err-wrapper">
               <span className="err">
                 {errors.password && touched.password && errors.password}
               </span>
             </div>
           </div>

           <button type="submit" className="submit-btn" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
};

export default LoginForm;
