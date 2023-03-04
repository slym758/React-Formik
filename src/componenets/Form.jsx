import { useFormik } from "formik";

function Form() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      hobies: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" placeholder="Jane" onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" placeholder="Jane" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Jane" onChange={handleChange} />
        <br />
        <br />

        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />

        <span>Femele</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Music"
            onChange={handleChange}
          />
          Music
        </div>

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photographer"
            onChange={handleChange}
          />
          Photographer
        </div>

        <br />
        <br />

        <select name="country" onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>

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

export default Form;
