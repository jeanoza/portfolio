import styled from "styled-components";

const Container = styled.div`
  width: 24%;
  height: 180px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: grayscale(1);
  border-radius: 15px;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    transform: scale(1.05);
    filter: grayscale(0);
    z-index: 1;
  }
  transition: all 0.5s;
  cursor: pointer;
  @media (max-width: 1024px) {
    min-width: 150px;
    height: 100px;
    font-size: 18px;
  }
`;

const Image = ({ bgUrl, name, onClick }) => {
  return (
    <Container bgUrl={bgUrl} onClick={onClick}>
      {name}
    </Container>
  );
};

export default Image;
