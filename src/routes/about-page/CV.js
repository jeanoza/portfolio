import styled, { keyframes } from "styled-components";
import Colors from "components/Colors";

const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Container = styled.div`
  display: ${(props) => (props.isHidden ? "flex" : "none")};
  position: absolute;
  top: 20px;
  flex-direction: column;
  width: 100%;
  border-bottom: 3px solid ${Colors.lineColor};
  padding-bottom: 30px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 50px;
`;
const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/images/kyubong_choi_cv.png);
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 320px;
  height: 450px;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const Description = styled.div`
  width: 100%;
  color: rgb(20, 20, 20, 0.7);
  margin-bottom: 20px;
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px;
  border-radius: 25px;

  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: ${Colors.lineColor};
  border: 2px solid ${Colors.lineColor};
  margin-bottom: 20px;

  :hover {
    background-color: rgb(255, 255, 255);
    color: rgb(20, 20, 20);
  }
  transition: all 0.3s ease-in-out;
`;

const CV = ({ isClicked }) => {
  return (
    <Container isHidden={isClicked}>
      <Title>MON CV</Title>
      <Section>
        <Image />
        <Text>
          <Description>
            Vous pouvez télécharger mon CV au format PDF en cliquant ce
            bouton-ci.
          </Description>
          <Button
            href="https://github.com/jeanoza/cvApp/files/6176408/Kyubong_choi_cv_v2.pdf"
            download
          >
            Télecharger mon CV
          </Button>
        </Text>
      </Section>
    </Container>
  );
};
export default CV;
