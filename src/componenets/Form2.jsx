import { useFormik } from "formik";
import "../App.css";
import validationSchema from "./Validations";

function Form2() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} onBlur={handleBlur} />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <br />
        <br />

        <label>Password</label>
        <input name="password" onChange={handleChange} onBlur={handleBlur} />
        {errors.password && touched.password && <div>{errors.password}</div>}

        <br />
        <br />

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div>{errors.passwordConfirm}</div>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />

        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Form2;
