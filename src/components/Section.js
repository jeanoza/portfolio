import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: flex-start;
  margin: 50px 0px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.div`
  font-style: italic;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin: 40px 0px;
  opacity: 0.7;
`;
const TextList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-style: italic;
  margin: 10px;
`;

const Section = ({ title, subtitle, languages }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <TextList>
        {languages.map((language, index) => (
          <Text key={index}>{language.name}</Text>
        ))}
      </TextList>
      {/* <IconList>
        {languages.map((language, index) => (
          <Item key={index} bgUrl={language.icon_url} />
        ))}
      </IconList> */}
    </Container>
  );
};

export default Section;
