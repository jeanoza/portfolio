import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import SectionProject from "components/SectionProject";
import Colors from "components/Colors";
import { projectObjArray } from "data";

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
  transition: visibility 1s ease-in-out;
  width: 100%;
  top: 20px;
  position: absolute;
  border-bottom: 3px solid ${Colors.lineColor};
  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const SideProject = ({ isClicked }) => {
  const [projectArray, setProjectArray] = useState([]);

  const getProjectArray = () => {
    try {
      projectObjArray && setProjectArray(projectObjArray);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProjectArray();
  }, []);
  return (
    <Container isHidden={isClicked}>
      <Title>SIDE-PROJECT</Title>
      {projectArray &&
        projectArray.map((project, index) => (
          <SectionProject
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            techniques={project.techniques}
            images={project.demo.images}
            video={project.demo.video}
            link={project.link}
          />
        ))}
    </Container>
  );
};
export default SideProject;
