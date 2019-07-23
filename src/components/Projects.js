import React, {Component} from 'react'
import Project from './Project'
import divider from './../img/divider-01.png'

class Projects extends Component {

    mountProjects() {
        const projects = this.props.projects.map(project => <Project key={project.key} id={project.key} bgImage={project.image} name={project.name} url={project.url} />)
        return projects
    }
    render() {
        return (
            <section id="my-projects">
                <div className="sectionTitle">
                    <img src={divider} alt=""/>
                    <h1>Mes Projets</h1>
                    <img src={divider} alt=""/>
                </div>
                <div className="slider">
                    {this.mountProjects()}
                </div>
            </section>
        )
    }
        
}

export default Projects