import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: flex-start;
  margin-top: 60px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const Subtitle = styled.div`
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  opacity: 0.7;
`;
const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 10px;
`;
const TextList = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 0px;
`;
const Item = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 25px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
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
      <IconList>
        {languages.map((language, index) => (
          <Item key={index} bgUrl={language.icon_url} />
        ))}
      </IconList>
    </Container>
  );
};

export default Section;
