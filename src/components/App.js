import GlobalStyles from "./GlobalStyles";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import TransitionRouter from "components/TransitionRouter";

function App() {
  return (
    <>
      <Router basename="/portfolio">
        <Navigation />
        <Route path="*">
          <TransitionRouter />
        </Route>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
