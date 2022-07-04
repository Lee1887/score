import styled from "styled-components";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Play</StyledNavLink>
      <StyledNavLink to="/history">History</StyledNavLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  background-color: #ccc;
  color: black;
  padding: 5px 35px;
  &.active {
    background: steelblue;
    color: white;
  }
`;
