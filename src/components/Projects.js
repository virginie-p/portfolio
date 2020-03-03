import React, {Component} from 'react'
import Project from './Project'
import $ from 'jquery'
import '../slick-1.8.1/slick/slick'

class Projects extends Component {

  componentDidMount() {
    $('.slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      rows: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  }

  mountProjects() {
      const projects = this.props.projects.map(project => <Project key={project.key} id={project.key} bgImage={project.image} name={project.name} technologies={project.technologies} url={project.url} />)
      return projects
  }
  
  render() {
      return (
          <section id="my-projects">
              <div className="sectionTitle">
                  <h2>Mes Projets</h2>
              </div>
              <div className="slider sectionContent">
                  {this.mountProjects()}
              </div>
          </section>
      )
  }
        
}

export default Projects