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
  top: 20px;
  border-bottom: 3px solid ${Colors.lineColor};
  padding-bottom: 30px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Section = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Header = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Introduction = styled.div`
  width: 350px;
  line-height: 24px;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
  line-height: 24px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const HeaderSubtitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  margin: 40px 0px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
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
const ArticleTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  margin-top: 40px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const ArticleSubtitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
const Paragraph = styled.div`
  line-height: 24px;
`;
const List = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1500px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          <HeaderSubtitle>{me.subtitle}</HeaderSubtitle>
          <Introduction>{me.introduction}</Introduction>
        </Header>
        <List>
          {me.descs &&
            me.descs.length > 0 &&
            me.descs.map((desc, index) => (
              <Article key={index}>
                <ArticleTitle>{desc.title}</ArticleTitle>
                <ArticleSubtitle>{desc.subtitle}</ArticleSubtitle>
                <Paragraph>{desc.paragraph}</Paragraph>
              </Article>
            ))}
        </List>
      </Section>
    </Container>
  );
};
export default Me;
