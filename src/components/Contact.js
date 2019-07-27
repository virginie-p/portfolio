import React from 'react'
import Axios from 'axios'

const API_PATH = 'https://virginie-pereira.fr/api/contact/index.php';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            fname : '',
            lname: '',
            email: '',
            message: '',
            error: null,
            mailSent: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        Axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
            mailSent: result.data.sent
            })
            
            let message = this.state.mailSent ? "Merci pour votre message, je vous répondrai dès que possible" : "Une erreur est survenue"
            console.log(message);
            document.getElementById('notification').append(message);
        })
        .catch(error => this.setState({ error: error.message }));


    }

    handleChange(e) {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        })
    }

    render() { 
        return (
            <section id="contact-form">
                <div className="sectionTitle">
                    <h1>Contact</h1>
                </div>
                <div>
                    <form action="/action_page.php" >
                        <div className="form-line">
                            <label>Prénom :</label>
                            <input type="text" id="fname" name="firstname" value={this.state.fname} onChange={this.handleChange}/>
                        </div>
                        <div className="form-line">
                            <label>Nom :</label>
                            <input type="text" id="lname" name="lastname" value={this.state.mname} onChange={this.handleChange}/>
                        </div>
                        <div className="form-line">
                            <label>Email :</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-line">
                            <label>Message :</label>
                            <textarea id="message" name="message" placeholder="Ecrivez votre message ici" value={this.state.message} onChange={this.handleChange}></textarea>
                        </div>
                        <input type="submit" value="Submit" onClick={this.handleFormSubmit}/>
                        <div id="notification">
                            
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact