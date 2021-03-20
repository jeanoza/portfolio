import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Home from "routes/Home";
import About from "routes/About";
import Contact from "routes/Contact";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const TransitionRouter = () => {
  let location = useLocation();

  return (
    <PageContainer>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </PageContainer>
  );
};

export default TransitionRouter;
