import React, {Component} from 'react'
import Project from './Project'
import divider from './../img/divider-01.png'

class Projects extends Component {

    mountProjects() {
        const projects = this.props.projects.map(project => <Project id={project.key} bgImage={project.image} name={project.name}  />)
        return projects
    }

    bulletsDiv() {
        const bullets = this.props.projects.map(project => `<button class="glide__bullet" data-glide-dir="=${project.key}"></button>`);
        const bulletsDiv = bullets.join(' ')
        return {__html: bulletsDiv}
    }

    render() {
        return (
            <section id="my-projects">
                <div className="sectionTitle">
                    <img src={divider} alt=""/>
                    <h1>Mes Projets</h1>
                    <img src={divider} alt=""/>
                </div>
                <div>
                    <div className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides" >
                                {this.mountProjects()}
                            </ul>
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
                                </svg>
                            </button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]" dangerouslySetInnerHTML={this.bulletsDiv()}>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
        
}

export default Projects