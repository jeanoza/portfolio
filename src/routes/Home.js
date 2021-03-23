import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Colors from "components/Colors";

// animation to slide in the home page from left
const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
// animation to slide out the home page to the left
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;
const fadeOut = keyframes`
  0% {
    opacity:0.9;
  }
  100% {
    opacity:0;
  }
`;
const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:0.9;
  }
`;
const Page = styled(Link)``;
const Container = styled(Page)`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url("https://miro.medium.com/max/12000/1*p9qBMe9Wql3Vx0f3tpcPOA.jpeg");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(20, 20, 20, 0.9);
  color: rgb(255, 255, 255);
  overflow-y: hidden;

  &.page-enter {
    animation: ${fadeIn} 1s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 1s forwards;
  }
`;
Container.defaultProps = {
  to: "/about",
};

const Main = styled.div`
  width: 50%;
  height: 250px;
  min-width: 320px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 5px solid ${Colors.lineColor};
  padding: 30px 20px;
  @media (max-width: 968px) {
    height: 180px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 40px;
  @media (max-width: 968px) {
    font-size: 30px;
  }
  ::after {
    content: "";
    background-color: ${Colors.lineColor};
    border-color: black;
    margin-top: 10px;
    width: 50px;
    height: 5px;
  }
`;
const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 968px) {
    font-size: 16px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Main>
        <Title>Kyubong CHOI</Title>
        <Subtitle>Développeur Front-end Junior</Subtitle>
        <Subtitle>Javascript | React</Subtitle>
      </Main>
    </Container>
  );
};
export default Home;
