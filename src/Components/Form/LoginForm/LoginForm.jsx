import { Formik } from "formik";
import '../css/Form.css'
import {SignInSchema} from "../Validation/FormSchema"

const LoginForm = () => {
 return (

     <Formik
       initialValues={{ email: "", password: "" }}
       validationSchema={SignInSchema}
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

           <button type="submit" className="submit-btn" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>

 );
};

export default LoginForm;
