import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "components/Image";
import Me from "routes/about-page/Me";
import Competence from "routes/about-page/Competence";
import SideProject from "routes/about-page/SideProject";
import CV from "routes/about-page/CV";
import Colors from "components/Colors";
import { imgObjArray } from "data";

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
  padding: 10px;
`;
const Section = styled.div`
  position: relative;
  width: 75%;
  min-width: 320px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    position: fixed;
    width: 100%;
    top: 0;
    margin: 0;
    color: rgb(255, 255, 255);
    background-color: rgb(20, 20, 20, 0.9);
    z-index: 10;

    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;
const Title = styled.div`
  position: relative;
  width: 75%;
  min-width: 320px;
  color: rgb(20, 20, 20);
  padding: 15px 0px;
  font-size: 25px;
  font-weight: 600;
  font-style: italic;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
    padding: 10px 0px;
  }
`;
const Article = styled.div`
  position: relative;
  width: 75%;
  min-width: 320px;
  border-top: 3px solid ${Colors.lineColor};
  padding: 20px 0px;
  color: rgb(20, 20, 20);
  @media (max-width: 768px) {
    width: 100%;
  }
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
