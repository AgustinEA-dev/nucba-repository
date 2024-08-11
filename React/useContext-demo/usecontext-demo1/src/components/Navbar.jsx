import styled from "styled-components";
import { useContext } from "react";
import DisplayContext from "../context";

const Nav = styled.nav``;

const Ul = styled.ul`
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100px;
  background-color: blue;
  color: white;
  list-style: none;
`;
const Li = styled.li``;

function Navbar() {
  const { visibility, handleDisplay } = useContext(DisplayContext);
  return (
    <>
      <Nav>
        <Ul style={{ display: visibility.display }}>
          <Li onClick={handleDisplay}>Home</Li>
          <Li>Home</Li>
          <Li>Home</Li>
          <Li>Home</Li>
        </Ul>
      </Nav>
    </>
  );
}

export default Navbar;
