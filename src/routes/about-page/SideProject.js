import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import SectionProject from "components/SectionProject";
import Colors from "components/Colors";

const projectObjArray = [
  {
    title: "Movistagram",
    subtitle: "Projet personnel",
    description:
      "Il s'agit d'une application qui permet de consulter la list des films, séries populaires et d'en chercher par le mot clé.",
    techniques: [
      "HTML",
      "CSS",
      "JavaScript",
      "ES6",
      "Arrow function",
      "filter / map function",
      "async / await",
      "Axios",
      "React Hooks",
      "The Movie DB API",
    ],
    demo: {
      images: [
        "images/movistagram/1.png",
        "images/movistagram/2.png",
        "images/movistagram/3.png",
        "images/movistagram/4.png",
        "images/movistagram/5.png",
      ],
      video: "images/movistagram/demo.mp4",
    },
    link: "https://jeanoza.github.io/movistagram",
  },
  {
    title: "Jwitter",
    subtitle: "Projet personnel",
    description:
      "Il s'agit d'une application clonné à l'instar de Twitter afin de tester et d'expérimenter Firebase, et aussi, de pratiquer TypeScript.",
    techniques: [
      "React",
      "Firebase",
      "TypeScript",
      "ES6",
      "React Router Dom",
      "Styled Components",
    ],
    demo: {
      images: [
        "images/jwitter/1.png",
        "images/jwitter/2.png",
        "images/jwitter/3.png",
      ],
      video: "images/jwitter/demo.mp4",
    },
    link: "https://jeanoza.github.io/jwitter_ts",
  },
];

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
