import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
return (
    <footer variant="dark" expand="md" bg="black" className="bg-dark text-white text-center py-4 mt-4">
    
        <Container>
            <Row>
                <Col md={6}>
                    <p>&copy; {new Date().getFullYear()} - | Todos los derechos reservados BellaClothes.com</p>
                </Col>
                <Col md={6}>
                    {/* Redes sociales */}
                    <div>
                        <a href="#" className="text-white me-3" aria-label="Facebook">
                            <i className="fa fa-facebook fa-2x"></i>
                        </a>
                        {/* 
                        <a href="#" className="text-white me-3">
                            <i className="fa fa-twitter fa-2x"></i>
                        </a>
                        */}
                        <a
                            href="https://www.instagram.com/bellaclothesoficial/"
                            className="text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fa fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);
};

export default Footer;
