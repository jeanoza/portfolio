import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "routes/Home";
import About from "routes/About";
import Contact from "routes/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

const AppRouter = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          );
        }}
      />
    </Router>
  );
};

export default AppRouter;

/*
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
*/
