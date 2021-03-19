import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import Colors from "components/Colors";

const Container = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  margin-top: 60px;
  color: rgb(20, 20, 20, 0.7);
  border-bottom: 1px solid rgb(20, 20, 20, 0.1);
  padding-bottom: 30px;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgb(20, 20, 20);
`;
const Subtitle = styled.div`
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
  margin: 0px 10px;
`;
const Description = styled.div`
  width: 600px;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    width: 300px;
  }
`;

const TechniqueList = styled.div`
  width: 600px;
  display: flexbox;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 15px 0px;
  font-weight: 500;
  @media (max-width: 800px) {
    width: 300px;
  }
`;
const Technique = styled.div`
  margin: 10px;
`;
const Image = styled.img`
  width: 160px;
  height: 100px;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const Video = styled.video`
  width: calc(75vw-320px);
  min-width: 500px;
  max-width: 700px;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    min-width: 300px;
  }
`;

const ImageList = styled.div`
  width: 100%;
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 15px;
  background-color: rgb(245, 245, 245);
`;
const Article = styled.div``;
const ButtonToSite = styled.a`
  width: 200px;
  padding: 10px;
  background-color: ${Colors.lineColor};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  margin: 30px 0px;
  cursor: pointer;
  &:hover {
    color: rgb(20, 20, 20);
    background-color: rgb(255, 255, 255);
    border: 1px solid ${Colors.lineColor};
  }
  transition: all 0.3s forwards;
`;
const Text = styled.div`
  width: 50%;
`;
const SectionProject = ({
  title,
  subtitle,
  description,
  techniques,
  images,
  video,
  link,
}) => {
  return (
    <Container>
      <Text>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{"-"}</Subtitle>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Article>
          <Description>{description}</Description>
          Techniques :
          <TechniqueList>
            {techniques &&
              techniques.length > 0 &&
              techniques.map((technique, index) => (
                <Technique key={index}>{technique}</Technique>
              ))}
          </TechniqueList>
          <ButtonToSite href={link} target="_blank">
            Découvrir ce projet
          </ButtonToSite>
        </Article>
      </Text>
      <Video src={video} controls></Video>
      <ImageList>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <Image key={index} src={image} alt="" />
          ))}
      </ImageList>
    </Container>
  );
};

export default SectionProject;

/* scroll move TODO
  const [refs, setRefs] = useState([]);
  const myRef = useRef(null);

  const onRightClick = (event) => {
    console.log(event);
    console.log(myRef);
    event.view.moveTo(500, 400);
  };

  useEffect(() => {
    setRefs([refs, ...refs]);
  }, [myRef]);

  */
