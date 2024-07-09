import styled from "styled-components";
import "animate.css";

const SlideDivStyled = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100vh;
  margin: 0;
  animation: slideInLeft;
  animation-duration: 2s;
`;
function SlideDiv() {
  return (
    <>
      <SlideDivStyled />
    </>
  );
}

export default SlideDiv;
