import styled, { css } from "styled-components";

const $dark = "#343d46";
const $light = "#e1e1e1";
const $googleColor = "#4285f4";

const buttonStyles = css`
  background-color: ${$dark};
  border: 1px solid ${$dark};
  color: ${$light};

  &:hover {
    background-color: white;
    color: ${$dark};
    border: 1px solid lighten(${$dark}, 20%);
  }
`;

const invertButtonStyles = css`
  background-color: ${$dark};
  color: ${$light};

  &:hover {
    background-color: ${$light};
    color: ${$dark};
  }
`;

const googleSignInStyles = css`
  background-color: ${$googleColor};
  color: white;
  border: 1px solid ${$googleColor};

  &:hover {
    background-color: white;
    color: ${$googleColor};
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.div`
  min-width: 150px;
  width: auto;
  height: 45px;
  line-height: 45px;
  padding: 0 30px;
  font-size: 15px;
  font-family: "Roboto Condensed", serif;
  text-transform: uppercase;
  font-weight: lighter;
  cursor: pointer;

  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
