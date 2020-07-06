import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";
 
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Route exact path="/" component={About} />
        {/* <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />  */}
      </div>
    </Router>
  );
}

export default App;
