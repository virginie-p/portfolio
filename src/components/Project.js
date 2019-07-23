import React, {Component} from 'react'

class Project extends Component {


    render() {
        const slideStyle = {
            backgroundImage:`url(${this.props.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        return (
            <li class="glide__slide" id={this.props.id} style={slideStyle}>
                <div className="slide-content" >
                {this.props.name}
                </div>
                <div className="filter"></div>
            </li>
        )

    }
}

export default Project