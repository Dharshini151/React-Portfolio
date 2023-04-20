import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Coffee from "../assets/projects/coffee.jpg";
import Recipe from "../assets/projects/recipe.jpg";
import Bday from "../assets/projects/bday.webp";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recipe}
              isBlog={false}
              title="Food Recipe"
              description="This is a Recipe App.Here recipes of the food are showcased and this app is developed using only HTML, CSS.We can search the recipes required and the recipe details is explained in detail."
              ghLink="https://github.com/Dharshini151/Recipe-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coffee}
              isBlog={false}
              title="Coffee Shop App"
              description="This application is a Coffee Shop App, it has 4 pages like Home, About, Menu and Contact.It is created using React, here i had used react router for routing pages and it also has footer.It has the details of coffee varities and price.Order can also be placed."
              ghLink="https://github.com/Dharshini151/day3coffee-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bday}
              isBlog={false}
              title="Birthday Wisher"
              description="Birthday Wisher is a Reminder like app where the birthday of the user will be reminded once it is set.It shows the days, hours, minutes and seconds like time countdown.Once the birthday is over, it shows for next year."
              ghLink="https://github.com/Dharshini151/React-project-Bday-Wisher"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects