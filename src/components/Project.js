import React, {Component} from 'react'

class Project extends Component {


    render() {
        const slideStyle = {
            backgroundImage:`url(${this.props.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
        return (
            <div className="slide" id={this.props.id}>
                <div className="filter"></div>
                <a className="slide-content" href={this.props.url} target="_blank" rel="noopener noreferrer">
                    {this.props.name}
                </a>
                <div className="slide-background"  style={slideStyle}></div>
            </div>
        )

    }
}

export default Project