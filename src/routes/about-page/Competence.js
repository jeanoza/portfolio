import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Section from "components/Section";
import Colors from "components/Colors";
import { dataObjArray } from "data";
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
  position: absolute;
  top: 20px;
  width: 100%;
  border-bottom: 3px solid ${Colors.lineColor};
  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Competence = ({ isClicked, title }) => {
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    setCompetences(dataObjArray);
  }, []);

  return (
    <Container isHidden={isClicked}>
      <Title>{title}</Title>
      <List>
        {competences.map((competence, index) => (
          <Section
            key={index}
            title={competence.title}
            subtitle={competence.subtitle}
            languages={competence.languages}
          />
        ))}
      </List>
    </Container>
  );
};
export default Competence;
