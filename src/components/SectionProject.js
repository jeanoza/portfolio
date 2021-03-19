import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import Colors from "components/Colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.div`
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.7;
`;
const Description = styled.div`
  width: 600px;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  opacity: 0.7;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    width: 300px;
  }
`;

const TextList = styled.div`
  width: 600px;
  display: flexbox;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 15px 0px;
  @media (max-width: 800px) {
    width: 300px;
  }
`;
const Text = styled.div`
  margin: 10px;
`;
const Body = styled.div`
  width: 100%;
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  width: calc(75vw - 350px);
  min-width: 600px;
  max-width: 700px;
  margin-right: 10px;
  border-radius: 5px;
  @media (max-width: 800px) {
    min-width: 300px;
  }
`;

const ImageList = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 15px;
  background-color: rgb(245, 245, 245);
`;
const Divider = styled.div`
  font-weight: 600;
  color: rgb(20, 20, 20, 0.7);
`;
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
      <Header>
        <Title>{title}</Title>
        <Subtitle>{"-"}</Subtitle>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Body>
        <Divider>
          <Description>{description}</Description>
          Techniques :
          <TextList>
            {techniques &&
              techniques.length > 0 &&
              techniques.map((technique, index) => (
                <Text key={index}>{technique}</Text>
              ))}
          </TextList>
          <ButtonToSite href={link} target="_blank">
            Découvrir ce projet
          </ButtonToSite>
        </Divider>
        <Video src={video} controls></Video>
      </Body>
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
