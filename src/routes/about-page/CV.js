import styled from "styled-components";

const Container = styled.div`
  opacity: ${(props) => (props.isHidden ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  height: 200px;
  position: absolute;
`;

const CV = ({ isClicked }) => {
  return <Container isHidden={isClicked}>CV</Container>;
};
export default CV;
