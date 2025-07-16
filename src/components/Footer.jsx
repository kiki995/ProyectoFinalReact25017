import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaCheckCircle } from 'react-icons/fa';

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
                <a href="https://www.facebook.com/bellaclothesoficial" className="me-3" style={{ color: '#3b5998' }}>
                  <FaFacebookF size={24} />
                </a>
                        {/* 
                        <a href="#" className="text-white me-3">
                            <i className="fa fa-twitter fa-2x"></i>
                        </a>
                        */}
                <a href="https://www.instagram.com/bellaclothesoficial/" style={{ color: '#e4405f' }}>
                  <FaInstagram size={24} />
                </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);
};

export default Footer;
