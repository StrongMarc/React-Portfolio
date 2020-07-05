import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Route exact path="/" component={About} /> */}
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
