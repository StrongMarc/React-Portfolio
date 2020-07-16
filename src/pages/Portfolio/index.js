import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import ProjectCard from "../../components/ProjectCard";
// import Contact from "../../components/Contact";
import {ProjectProvider} from '../../utils/ProjectContext';

function Portfolio() {
  return (
    // <Container style={{ minHeight: "100vh" }}>
    // <Row>
      <ProjectProvider>
        {/* <div> */}
          <h2 className="text-center title">Projects</h2>
      
          <ProjectCard />
        {/* </div> */}
         
      </ProjectProvider>
    // </Row>
    // </Container>
  );
}

export default Portfolio;
