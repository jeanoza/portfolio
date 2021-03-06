import GlobalStyles from "./GlobalStyles";
import { Route, HashRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import TransitionRouter from "components/TransitionRouter";

function App() {
  return (
    <>
      <Router>
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
