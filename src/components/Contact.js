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
        this.checkFirstname = this.checkFirstname.bind(this);
        this.checkLastname = this.checkLastname.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkMessage = this.checkMessage.bind(this);
        this.regex = /^[\s\n\r]+$/;

    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.checkFieldsValue();
        if (document.querySelectorAll('.error-message').length === 0) {
            Axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: {'content-type': 'application/json'},
                data: this.state
            })
            .then(result => {
                this.setState({
                mailSent: result.data.sent
                });
                let message = this.state.mailSent ? "Merci pour votre message, je vous répondrai dès que possible" : "Une erreur est survenue";
                document.getElementById('notification').innerHTML = '';
                document.getElementById('notification').append(message);
                this.setState({
                    fname : '',
                    lname: '',
                    email: '',
                    message: ''
                });
            })
            .catch(error => this.setState({ error: error.message }));
        }
    }

    handleChange(e) {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        });
    }

    automaticScroll() {
        document.getElementsByTagName('form')[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }

    checkFirstname(){
        let input = document.getElementById('fname');

        if (input.nextSibling != null) {
            input.nextSibling.remove();
        }

        let errorMessage = document.createElement('p');
        errorMessage.className = "error-message";

        if (input.value === '' || this.regex.test(input.value)) {
            errorMessage.innerHTML = "Merci de bien vouloir renseigner votre prénom.";
            input.parentNode.appendChild(errorMessage);
        }

        this.automaticScroll();
    }

    checkLastname(){
        let input = document.getElementById('lname');

        if (input.nextSibling != null) {
            input.nextSibling.remove();
        }

        let errorMessage = document.createElement('p');
        errorMessage.className = "error-message";

        if (input.value === '' || this.regex.test(input.value)) {
            errorMessage.innerHTML ="Merci de bien vouloir renseigner votre nom.";
            input.parentNode.appendChild(errorMessage);
        }

        this.automaticScroll();
    }

    checkMessage() {
        let input = document.getElementById('message');
        
        if (input.nextSibling != null) {
            input.nextSibling.remove();
        }

        let errorMessage = document.createElement('p');
        errorMessage.className = "error-message";

        if (input.value === '' || this.regex.test(input.value)) {
            errorMessage.innerHTML = "Merci de bien vouloir renseigner un message.";
            input.parentNode.appendChild(errorMessage);
        }

        this.automaticScroll();
    }

    checkEmail() {
        let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        let input = document.getElementById('email');

        if (input.nextSibling != null) {
            input.nextSibling.remove();
        }

        let errorMessage = document.createElement('p');
        errorMessage.className = "error-message";

        if (!regex.test(input.value)) {
            errorMessage.innerHTML = "Cette adresse mail n'est pas correcte. Merci de la modifier.";
            input.parentNode.appendChild(errorMessage);
        }

        this.automaticScroll();
    }

    checkFieldsValue() {
        this.checkLastname();
        this.checkFirstname();
        this.checkEmail();
        this.checkMessage();
    }

    render() { 
        return (
            <section id="contact-form">
                <div className="sectionTitle">
                    <h2>Contact</h2>
                </div>
                <div className="sectionContent">
                    <form id="form-contact" onSubmit={this.handleFormSubmit}>
                        <div className="form-line">
                            <label htmlFor="fname">Prénom :</label>
                            <input type="text" id="fname" name="firstname" value={this.state.fname} onChange={this.handleChange} onBlur={this.checkFirstname}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="lname">Nom :</label>
                            <input type="text" id="lname" name="lastname" value={this.state.lname} onChange={this.handleChange} onBlur={this.checkLastname}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="email">Email :</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.checkEmail}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="message">Message :</label>
                            <textarea id="message" name="message" placeholder="Ecrivez votre message ici" value={this.state.message} onChange={this.handleChange} onBlur={this.checkMessage} rows="5" ></textarea>
                        </div>
                        <input type="submit" value="Envoyer"/>
                        <div id="notification"> 
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact