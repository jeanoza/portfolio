import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Section from "components/Section";
import Colors from "components/Colors";
import { dataObjArray, competenceApi } from "data";
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
  justify-content: space-around;
`;

const Competence = ({ isClicked, title }) => {
  const [loading, setLoading] = useState(true);
  const [competences, setCompetences] = useState([]);

  const getCompetences = async () => {
    try {
      const { data } = await competenceApi();
      setCompetences(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCompetences();
  }, []);

  return loading ? (
    "loading"
  ) : (
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
