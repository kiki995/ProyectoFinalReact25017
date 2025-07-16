import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaCheckCircle } from 'react-icons/fa';

const Contacto = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setShowSuccessModal(true);
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <Container className="py-5">
      {/* Encabezado con efecto moderno */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-uppercase" style={{ letterSpacing: '3px', color: '#2c3e50' }}>
          Contacta con <span style={{ color: '#e74c3c' }}>BellaClothes</span>
        </h1>
        <p className="lead text-muted">
          Estamos aquí para ayudarte con cualquier consulta
        </p>
      </div>

      <Row className="g-4">
        {/* Información de contacto */}
        <Col lg={5} className="pe-lg-5">
          <div className="p-4 rounded-3 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
            <h3 className="mb-4 fw-bold" style={{ color: '#2c3e50' }}>Nuestra tienda</h3>
            
            <div className="d-flex mb-4">
              <FaMapMarkerAlt className="mt-1 me-3" style={{ color: '#e74c3c', fontSize: '1.5rem' }} />
              <div>
                <h5 className="fw-bold mb-1">Dirección</h5>
                <p className="mb-0">Av. Bartolomé Mitre 2487, B1605 Buenos Aires, Provincia de Buenos Aires</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <FaPhone className="mt-1 me-3" style={{ color: '#e74c3c', fontSize: '1.5rem' }} />
              <div>
                <h5 className="fw-bold mb-1">Teléfono</h5>
                <p className="mb-0">+34 123 456 789</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <FaEnvelope className="mt-1 me-3" style={{ color: '#e74c3c', fontSize: '1.5rem' }} />
              <div>
                <h5 className="fw-bold mb-1">Email</h5>
                <p className="mb-0">info@bellaclothes.com</p>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold mb-3">Síguenos</h5>
              <div className="d-flex">
                <a href="https://www.facebook.com/bellaclothesoficial" className="me-3" style={{ color: '#3b5998' }}>
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.instagram.com/bellaclothesoficial/" style={{ color: '#e4405f' }}>
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </Col>
{/* Formulario de contacto - ahora con manejo de estado */}
      <Col lg={7}>
        <div className="p-4 rounded-3 shadow-sm">
          <h3 className="mb-4 fw-bold" style={{ color: '#2c3e50' }}>Escríbenos</h3>
          
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formNombre">
                  <Form.Label className="fw-bold">Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formTelefono">
                  <Form.Label className="fw-bold">Teléfono</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+34 123 456 789" 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAsunto">
                  <Form.Label className="fw-bold">Asunto</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Motivo de tu consulta" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="formMensaje">
                  <Form.Label className="fw-bold">Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..." 
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Button 
                  variant="danger" 
                  size="lg" 
                  type="submit"
                  className="px-4 py-2 text-uppercase fw-bold"
                  style={{ backgroundColor: '#e74c3c', border: 'none' }}
                >
                  Enviar Mensaje
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>

      {/* Modal de confirmación */}
      <Modal 
        show={showSuccessModal} 
        onHide={() => setShowSuccessModal(false)}
        centered
        size="md"
      >
        <Modal.Body className="text-center p-5">
          <div className="mb-4">
            <FaCheckCircle 
              style={{ 
                color: '#28a745', 
                fontSize: '5rem',
                filter: 'drop-shadow(0 4px 8px rgba(40, 167, 69, 0.3))'
              }} 
            />
          </div>
          <h3 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>
            ¡Mensaje Enviado!
          </h3>
          <p className="mb-4">
            Gracias por contactar con BellaClothes. Hemos recibido tu mensaje y te responderemos en breve.
          </p>
          <Button 
            variant="outline-success" 
            size="lg"
            className="px-4 py-2 fw-bold"
            onClick={() => setShowSuccessModal(false)}
            style={{ 
              borderWidth: '2px',
              borderColor: '#28a745',
              color: '#28a745'
            }}
          >
            Aceptar
          </Button>
        </Modal.Body>
      </Modal>
      </Row>

      {/* Mapa de ubicación */}
      <div className="mt-5 rounded-3 overflow-hidden shadow-sm">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.0361669043577!2d-58.520190924141396!3d-34.5273116534672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0d07b5fdf59%3A0xcd0362fe4874726e!2sBTE%2C%20Av.%20Bartolom%C3%A9%20Mitre%202487%2C%20B1605%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1752661153899!5m2!1ses!2sar"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Ubicación de BellaClothes"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contacto;