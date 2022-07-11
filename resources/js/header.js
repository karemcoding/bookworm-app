import React, { Component,setState } from 'react';
import '../css/app.css';
import bookworm_icon from '../assets/bookworm_icon.svg';
import { Navbar, Container, Nav, Modal,Button } from 'react-bootstrap';
import LogInForm from './loginform';
class Header extends Component {
    state = {
        show: false,
    }
    handleClose = () => {
        this.setState({show: false});
    }
    handleShow = () => {
        this.setState({show: true});
    }
    render() {
        return (
            <>
                <div id="header">
                    <Navbar bg="#f8f9fb" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/">
                                <img
                                    src={bookworm_icon}
                                    height="32"
                                    className="d-inline-block align-top"
                                    alt="Bookworm logo"
                                /></Navbar.Brand>

                            <Nav
                                className="justify-content-end flex-grow-1 pe-3"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#/homepage">Home</Nav.Link>
                                <Nav.Link href="#/books">Shop</Nav.Link>
                                <Nav.Link href="#/about">About</Nav.Link>
                                <Nav.Link href="#/cart">Cart</Nav.Link>
                                <Nav.Link onClick={this.handleShow}>Sign In</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar></div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LogInForm/>
                    </Modal.Body>
                    
                </Modal>
            
            </>);
    }
}

export default Header;
