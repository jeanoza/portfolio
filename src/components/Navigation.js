import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: rgb(10, 10, 10, 0.9);
  z-index: 10;
  @media (max-width: 767px) {
    bottom: 0;
    height: 50px;
  }
`;
const List = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
  }
`;
const Item = styled.li`
  width: 33.3%;
  display: flex;
  justify-content: center;
  padding: 10px;
  color: rgb(255, 255, 255);
  transition: all 0.5s ease-in-out;
  :hover {
    color: rgb(20, 20, 20);
    background-color: rgb(255, 255, 255);
  }
`;

const Navigation = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="1x" />
          </Link>
        </Item>
        <Item>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} size="1x" />
          </Link>
        </Item>
        <Item>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;
