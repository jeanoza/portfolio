import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "components/Image";
import Me from "routes/about-page/Me";
import Competence from "routes/about-page/Competence";
import SideProject from "routes/about-page/SideProject";
import CV from "routes/about-page/CV";
import Colors from "components/Colors";

const imgObjArray = [
  {
    name: "KYUBONG",
    link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWsRsb5AWPQsKLg6UNlZnSKg4jniPyJphGg&usqp=CAU",
  },
  {
    name: "COMPETENCES",
    link: "https://images.itnewsinfo.com/lmi/articles/grande/000000059529.jpg",
  },
  {
    name: "SIDE-PROJECT",
    link:
      "https://www.lenouveleconomiste.fr/wp-content/uploads/2019/06/Lefficacit%C3%A9-vari%C3%A9e-des-think-tank-826x459.jpg",
  },
  {
    name: "MON CV",
    link:
      "https://media.istockphoto.com/photos/resume-applications-on-the-desk-ready-to-be-reviewed-picture-id698820654?k=6&m=698820654&s=612x612&w=0&h=NEdmsSTldovJRPhogfNTwJ82MxDWiOWOUw00_SMC2gg=",
  },
];
const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;
const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Page = styled.div``;

const Container = styled(Page)`
  width: 100%;
  height: 95vh;
  top: 40px;
  position: absolute;
  background-color: rgb(255, 255, 255);
  &.page-enter {
    animation: ${fadeIn} 1s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 1s forwards;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Section = styled.div`
  width: 75%;
  min-width: 320px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
`;
const Title = styled.div`
  width: 75%;
  min-width: 320px;
  color: rgb(20, 20, 20);
  padding: 15px 0px;
  font-size: 25px;
  font-weight: 600;
`;
const Article = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  min-width: 320px;
  border-top: 3px solid ${Colors.lineColor};
  padding: 20px 0px;
  color: rgb(20, 20, 20);
`;

const About = () => {
  const [images, setImages] = useState(imgObjArray);
  const [toggles, setToggles] = useState([true, false, false, false]);
  const onClick = (event) => {
    const {
      target: { innerText },
    } = event;
    imgObjArray.forEach((image, index) => {
      if (innerText === image.name && !toggles[index]) {
        switch (index) {
          case 0:
            setToggles([true, false, false, false]);
            break;
          case 1:
            setToggles([false, true, false, false]);
            break;
          case 2:
            setToggles([false, false, true, false]);
            break;
          case 3:
            setToggles([false, false, false, true]);
            break;
          default:
            break;
        }
      } else if (innerText === image.name && toggles[index]) {
        setToggles([false, false, false, false]);
      }
    });
  };

  return (
    <Container>
      <Title>DECOUVREZ-MOI : </Title>
      <Section>
        {images.map((image, index) => (
          <Image
            key={index}
            bgUrl={image.link}
            name={image.name}
            onClick={onClick}
          />
        ))}
      </Section>
      <Article>
        <Me isClicked={toggles[0]} title={images[0].name} />
        <Competence isClicked={toggles[1]} title={images[1].name} />
        <SideProject isClicked={toggles[2]} title={images[2].name} />
        <CV isClicked={toggles[3]} title={images[3].name} />
      </Article>
    </Container>
  );
};
export default About;
