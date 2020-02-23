import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custon-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setEmail("Email");
    setPassword("Password");
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  return (
    <div className="sign-in">
      <h1 className="title">Sign in</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          name="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          label="Email"
        />
        <FormInput
          required
          name="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          label="Password"
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
