import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 7vh;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 75px;
  position: relative;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 300;
  color: #e1e1e1;
  text-transform: uppercase;
  margin: 0px 20px;
  cursor: pointer;
  font-family: "Roboto Condensed", serif;
`;
