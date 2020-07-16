import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import github from "./components/pages/Github";
 
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route path="/github" component={github} />  */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
