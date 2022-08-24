import { useState } from "react";


// TODO:: refactor validation
const MyFirstForm = () => {
  // Fields: first name, last name, email, password, confirm password, address.
  const [inputs, setInputs] = useState({});
  const [validationMsg, setValidationMsg] = useState("");


  const handleChange = (e) => {
    const inputValue = e.target.value;
    const name = e.target.name;
    setInputs(values => ({...values, [name]: inputValue}))
  };

  const validate = () => {
    let valid = true;
    const {firstName, lastName, email, password, confirmPass, address} = inputs;
    if (!firstName && !firstName.trim()) {
      valid = false;
      setValidationMsg("first Name is required");
    } else if (!lastName && !lastName.trim()) {
      setValidationMsg("last Name is required");
      valid = false;
    } else if (!email || !email.trim()) {
      setValidationMsg("email is required");
      valid = false;
    } else if (!email.includes("@")) {
      valid = false;
      setValidationMsg("email is not valid");
    } else if (!password.trim()) {
      setValidationMsg("password is required");
      valid = false;
    } else if (password.length < 6) {
      setValidationMsg("password should be longer than 6");
      valid = false;
    } else if (!confirmPass.trim()) {
      setValidationMsg("confirm password is required");
      valid = false;
    } else if (confirmPass !== password) {
      setValidationMsg("password does not match");
      valid = false;
    } else if (!address.trim()) {
      setValidationMsg("address is required");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("You Are Done");
    } else {
      return;
    }
  };

  return (
    <div>
      <div>{validationMsg}</div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default MyFirstForm;
