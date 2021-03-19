import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Colors from "components/Colors";

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(10, 10, 10, 0.9);
  z-index: 10;
`;
const List = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.li`
  padding: 10px;
  color: rgb(255, 255, 255);

  transition: all 0.5s ease-in-out;
`;

const Navigation = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/">Accueil</Link>
        </Item>
        <Item>
          <Link to="/about">Qui suis-je</Link>
        </Item>
        <Item>
          <Link to="/contact">Contact</Link>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;
