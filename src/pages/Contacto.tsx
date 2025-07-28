import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Form, Button, Table,
} from 'react-bootstrap';

interface ContactoData {
  nombre: string;
  telefono: string;
  correo: string;
  pais: string;
  nombreOficial: string;
  mensaje: string;
}

export default function Contacto() {
  const [form, setForm] = useState<ContactoData>({
    nombre: '',
    telefono: '',
    correo: '',
    pais: '',
    nombreOficial: '',
    mensaje: '',
  });

  const [contactos, setContactos] = useState<ContactoData[]>([]);
  const [paises, setPaises] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'pais') {
      const seleccionado = paises.find((p) => p.name.common === value);
      if (seleccionado) {
        setForm((prev) => ({
          ...prev,
          nombreOficial: seleccionado.name.official,
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactos([...contactos, form]);
    setForm({
      nombre: '',
      telefono: '',
      correo: '',
      pais: '',
      nombreOficial: '',
      mensaje: '',
    });
  };

  const editar = (index: number) => {
    setForm(contactos[index]);
    eliminar(index);
  };

  const eliminar = (index: number) => {
    const nuevos = [...contactos];
    nuevos.splice(index, 1);
    setContactos(nuevos);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/lang/spanish')
      .then((res) => res.json())
      .then((data) => setPaises(data))
      .catch(() => alert('Error al cargar países'));
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Contáctenos</h2>
      <Row>
        {/* Formulario */}
        <Col md={6} xs={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Teléfono *</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="+56"
                pattern="^\+56\d{9}$"
              />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Correo electrónico *</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>País *</Form.Label>
              <Form.Control
                as="select"
                name="pais"
                value={form.pais}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un país</option>
                {paises.map((pais, idx) => (
                  <option key={idx} value={pais.name.common}>
                    {pais.name.common}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nombre oficial del país</Form.Label>
              <Form.Control
                type="text"
                name="nombreOficial"
                value={form.nombreOficial}
                readOnly
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mensaje *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-2">
              Enviar
            </Button>
          </Form>
        </Col>

        {/* Tabla de mensajes */}
        <Col md={6} xs={12} className="mt-4 mt-md-0">
          <h4 className="mb-3">Mensajes Recibidos</h4>
          <div className="table-responsive">
            <Table bordered hover responsive size="sm">
              <thead className="thead-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>País</th>
                  <th>Oficial</th>
                  <th>Mensaje</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {contactos.length > 0 ? (
                  contactos.map((c, i) => (
                    <tr key={i}>
                      <td>{c.nombre}</td>
                      <td>{c.telefono}</td>
                      <td>{c.correo}</td>
                      <td>{c.pais}</td>
                      <td>{c.nombreOficial}</td>
                      <td>{c.mensaje}</td>
                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => editar(i)}
                          className="mb-1"
                        >
                          Editar
                        </Button>{' '}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => eliminar(i)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center text-muted">
                      No hay mensajes todavía.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Mapa */}
      <div className="mt-5">
        <h4 className="text-center mb-3">Nuestra ubicación</h4>
        <div
          style={{
            width: '100%',
            minHeight: '500px',
            height: '500px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <iframe
            title="Mapa ModaSur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.951362137266!2d-70.6089650240376!3d-33.417988995851005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf69d4854951%3A0x9a87ef2fefaad0df!2sCenco%20Costanera!5e1!3m2!1ses!2scl!4v1753714300097!5m2!1ses!2scl"
            style={{
              width: '100%',
              height: '100%',
              border: '0',
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </Container>
  );
}
