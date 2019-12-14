import React, {Component} from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import * as emailjs from "emailjs-com"


class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    handleSubmit(e){
        e.preventDefault();
        const {name, email, message } = this.state;
        let templateParams = {
            from_name: email,
            to_name: 'apnguyen333@gmail.com',
            name: name,
            message_html: message
        };
        emailjs.send(
            "apnguye333_gmail_com",
            "template_46F2z50x",
            templateParams,
            "user_U7wOC1YztxxYBd2pY62q5"
        );
        this.resetForm();
    }

    resetForm(){
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value})
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} style={{paddingTop: '4%', paddingLeft: '25%', paddingRight: '25%'}}>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input
                        id="Name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, "name")}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email: </Label>
                    <Input
                        id="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, "email")}/>
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message: </Label>
                    <Input
                        id="Message"
                        type="textarea"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, "message")}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>

            
            
        )
    
    }
}

export default Contact;
