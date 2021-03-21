import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Colors from "components/Colors";
import { MeObj } from "data";

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
  flex-direction: column;
  width: 100%;
  position: absolute;
  border-bottom: 3px solid ${Colors.lineColor};
  padding-bottom: 30px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Section = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Header = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
`;
const Photo = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 75px;
  width: 150px;
  height: 150px;
  margin: 50px 0px;
`;
const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 40px 0px;
  color: rgb(20, 20, 20, 1);
`;
const Paragraph = styled.div`
  line-height: 24px;
`;
const List = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1317px) {
    width: 50%;
  }
  @media (max-width: 1124px) {
    width: 100%;
  }
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(20, 20, 20, 0.7);
`;
const Me = ({ isClicked }) => {
  const [me, setMe] = useState([]);

  useEffect(() => {
    MeObj && setMe(MeObj);
  }, []);

  return (
    <Container isHidden={isClicked}>
      <Title>KYUBONG?</Title>
      <Section>
        <Header>
          <Photo bgImage={`${process.env.PUBLIC_URL}/${me.photo}`} />
          <HeaderTitle>{me.title}</HeaderTitle>
        </Header>
        <List>
          {me.descs &&
            me.descs.length > 0 &&
            me.descs.map((desc, index) => (
              <Article key={index}>
                <Subtitle>{desc.subtitle}</Subtitle>
                <Paragraph>{desc.paragraph}</Paragraph>
              </Article>
            ))}
        </List>
      </Section>
    </Container>
  );
};
export default Me;
