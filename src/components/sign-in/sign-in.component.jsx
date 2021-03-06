import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    // setEmail("Email");
    // setPassword("Password");

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  return (
    <div className="sign-in">
      <h2 className="title">
        Already have an account?
        <span className="subtitle">Sign in with your email and password</span>
      </h2>

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
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
