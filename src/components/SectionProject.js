import styled from "styled-components";
import Colors from "components/Colors";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border-bottom: 1px solid rgb(20, 20, 20, 0.1);
  padding-bottom: 30px;
`;
const Text = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 300px;
  }
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: rgb(20, 20, 20);
`;
const Subtitle = styled.span`
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
  margin: 0px 10px;
`;
const Description = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    min-width: 300px;
  }
`;

const Video = styled.video`
  width: 50%;
  min-width: 400px;
  border-radius: 5px;
  margin-bottom: 10px;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 300px;
  }
`;
const TechniqueList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 15px 0px;
  font-weight: 400;
  font-style: italic;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 300px;
  }
`;
const Technique = styled.div`
  margin: 10px;
`;
const ButtonToSite = styled.a`
  width: 200px;
  padding: 10px;
  background-color: ${Colors.lineColor};
  border: 2px solid ${Colors.lineColor};
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
  :hover {
    color: rgb(20, 20, 20);
    background-color: rgb(255, 255, 255);
  }
  transition: all 0.3s forwards;
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
const Image = styled.img`
  width: 160px;
  height: 100px;
  border-radius: 5px;
  opacity: 0.7;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    transform: scale(1.1);
    opacity: 1;
  }
  transition: all 0.3s linear;
  @media (max-width: 1024px) {
    width: 80px;
    height: 50px;
  }
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
      </Text>
      <Video src={`${process.env.PUBLIC_URL}/${video}`} controls></Video>
      <ImageList>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <Image
              key={index}
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt=""
            />
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
