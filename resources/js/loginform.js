import React, { Component } from 'react';
import { withFormik, Formik } from 'formik';
import axios from 'axios';


import { Col, Row, Container, Image, Card, ListGroup, Button, ListGroupItem, Form } from 'react-bootstrap'
class LogInForm extends Component {


    postData(data){
        axios.post('/api/user', 
        data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          
        
        }
        )
        window.location.reload();
        

    }

    render() {

        return (
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        onSubmit={(values) => {
                        this.postData(values)}}

                    >

                        {({
                            handleSubmit,
                            handleChange,
                            values,
                        }) => (
                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                </Form.Group>


                                <Button variant="primary" type="submit" >
                                    Log In
                                </Button>
                            </Form>
                        )}
                    </Formik>

        )
    }
}



export default LogInForm;