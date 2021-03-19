import styled from "styled-components";
import { useEffect, useState } from "react";
import Section from "components/Section";

const Container = styled.div`
  opacity: ${(props) => (props.isHidden ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  height: 200px;
  position: absolute;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const List = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const dataObjArray = [
  {
    title: "Acquises",
    subtitle: '"Je suis capable de coder avec" : ',
    languages: [
      {
        name: "HTML5",
        icon_url:
          "https://cdn4.iconfinder.com/data/icons/blackicon/54/html5_icon-512.png",
      },
      {
        name: "CSS3",
        icon_url:
          "https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-512.png",
      },
      {
        name: "JavaScript(ES6)",
        icon_url:
          "https://cdn.icon-icons.com/icons2/2389/PNG/512/javascript_logo_icon_145155.png",
      },
      {
        name: "React JS",
        icon_url:
          "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg",
      },
      {
        name: "Node JS",
        icon_url: "http://cdn.onlinewebfonts.com/svg/img_189697.png",
      },
    ],
  },
  {
    title: "En cours",
    subtitle: '"Je suis en train d\'apprendre" :',
    languages: [
      {
        name: "TypeScript",
        icon_url:
          "https://d33wubrfki0l68.cloudfront.net/58f9f46aa7c55d69b118dbea6899525f14ee257e/bd73d/img/tech/typescript.svg",
      },
      {
        name: "Github",
        icon_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOk2uzJkQw5MAnJ7UqMongGV0Ohe0zHPiUdA&usqp=CAU",
      },
      {
        name: "Express",
        icon_url: "https://images.tute.io/tute/topic/express-js.png",
      },
    ],
  },
  {
    title: "A venir",
    subtitle: '"J\'aimerais apprendre" :',
    languages: [
      {
        name: "Redux",
        icon_url: "https://img.icons8.com/ios-filled/452/redux.png",
      },
      {
        name: "React Native",
        icon_url: "https://img.icons8.com/ios/452/react-native.png",
        //https://img.icons8.com/ios-filled/452/redux.png
      },
      {
        name: "GraphQL",
        icon_url:
          "https://cdn.icon-icons.com/icons2/2248/PNG/512/graphql_icon_137529.png",
      },
      {
        name: "Nest JS",
        icon_url:
          "https://cdn.icon-icons.com/icons2/2148/PNG/512/nestjs_icon_132165.png",
      },
    ],
  },
  {
    title: "Autre connaissance",
    subtitle: '"J\'ai appris et comprends" :',
    languages: [
      {
        name: "Python",
        icon_url: "https://img.icons8.com/ios/452/python.png",
      },
      {
        name: "C",
        icon_url:
          "https://icons.veryicon.com/png/o/object/material-design-icons-1/language-c.png",
      },
      {
        name: "Java",
        // icon_url: "https://image.flaticon.com/icons/png/512/121/121152.png",
        icon_url: "https://img.icons8.com/ios/452/java-coffee-cup-logo.png",
      },
      {
        name: "Spring Boot",
        icon_url:
          "http://steveperkins.com/wp-content/uploads/2014/02/spring-boot-logo.png",
      },
      {
        name: "MySQL",
        icon_url:
          "https://www.signl4.com/de/wp-content/uploads/sites/2/2019/01/3.png",
      },
      {
        name: "Firebase",
        icon_url:
          "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png",
      },
    ],
  },
];

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
