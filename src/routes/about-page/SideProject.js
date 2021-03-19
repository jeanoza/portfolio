import styled from "styled-components";
import { useEffect, useState } from "react";
import SectionProject from "components/SectionProject";

const projectObjArray = [
  {
    title: "Movistagram",
    subtitle: "Projet personnel",
    description:
      "Il s'agit d'une application qui permet de regarder les films et séries populaires et d'en chercher par le mot clé.",
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
        "/images/movistagram/1.png",
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
        "/images/jwitter/1.png",
        "images/jwitter/2.png",
        "images/jwitter/3.png",
      ],
      video: "images/jwitter/demo.mp4",
    },
    link: "https://jeanoza.github.io/jwitter_ts",
  },
];

const Container = styled.div`
  opacity: ${(props) => (props.isHidden ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  position: absolute;
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
      <Title>Side-Project</Title>
      {projectArray.map((project, index) => (
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
