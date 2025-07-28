import React, { useState, useEffect } from 'react';

export default function Contacto() {
  const [contactos, setContactos] = useState([]);
  const [paises, setPaises] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    pais: '',
    nombreOficial: '',
    mensaje: '',
  });

  // Cargar países desde API
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/lang/spanish')
      .then((res) => res.json())
      .then((data) => {
        const lista = data.map((pais) => ({
          nombre: pais.name.common,
          capital: pais.capital?.[0] || 'No disponible',
        }));
        setPaises(lista.sort((a, b) => a.nombre.localeCompare(b.nombre)));
      })
      .catch(() => alert("No se pudo cargar la lista de países."));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = [];

    const telRegex = /^\+56\d{9}$/;
    if (!telRegex.test(form.telefono)) {
      errores.push("El teléfono debe comenzar con +56 y tener 9 dígitos numéricos.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.correo)) {
      errores.push("El correo no tiene un formato válido.");
    }

    if (!form.nombre.trim()) errores.push("El nombre es obligatorio.");
    if (!form.pais.trim()) errores.push("Debe seleccionar un país.");
    if (!form.mensaje.trim()) errores.push("Debe ingresar un mensaje.");

    if (errores.length > 0) {
      alert("Errores:\n" + errores.join('\n'));
      return;
    }

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

  const editar = (index) => {
    setForm(contactos[index]);
    eliminar(index);
  };

  const eliminar = (index) => {
    const nuevos = [...contactos];
    nuevos.splice(index, 1);
    setContactos(nuevos);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contáctenos</h2>

      <div className="row">
        {/* Formulario */}
        <div className="col-md-6 col-12 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre <span className="text-danger">*</span></label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono <span className="text-danger">*</span></label>
              <input
                type="text"
                className="form-control"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+56"
                required
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico <span className="text-danger">*</span></label>
              <input
                type="email"
                className="form-control"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>País <span className="text-danger">*</span></label>
              <select
                className="form-control"
                name="pais"
                value={form.pais}
                onChange={(e) => {
                  const seleccionado = paises.find(p => p.nombre === e.target.value);
                  setForm({
                    ...form,
                    pais: e.target.value,
                    nombreOficial: seleccionado?.capital || '',
                  });
                }}
                required
              >
                <option value="">Seleccione un país</option>
                {paises.map((p, i) => (
                  <option key={i} value={p.nombre}>{p.nombre}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Capital</label>
              <input
                type="text"
                className="form-control"
                name="nombreOficial"
                value={form.nombreOficial}
                disabled
              />
            </div>

            <div className="form-group">
              <label>Mensaje <span className="text-danger">*</span></label>
              <textarea
                className="form-control"
                name="mensaje"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-2">Enviar</button>
          </form>
        </div>

        {/* Tabla de mensajes */}
        <div className="col-md-6 col-12">
          <h4 className="mb-3">Mensajes Recibidos</h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>País</th>
                  <th>Capital</th>
                  <th>Mensaje</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {contactos.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">No hay mensajes todavía.</td>
                  </tr>
                ) : (
                  contactos.map((c, i) => (
                    <tr key={i}>
                      <td>{c.nombre}</td>
                      <td>{c.telefono}</td>
                      <td>{c.correo}</td>
                      <td>{c.pais}</td>
                      <td>{c.nombreOficial}</td>
                      <td>{c.mensaje}</td>
                      <td>
                        <button className="btn btn-sm btn-warning mr-1" onClick={() => editar(i)}>Editar</button>
                        <button className="btn btn-sm btn-danger" onClick={() => eliminar(i)}>Eliminar</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-5">
        <h4 className="text-center mb-3">Nuestra ubicación</h4>
        <div className="embed-responsive embed-responsive-21by9" style={{ minHeight: '500px' }}>
          <iframe
            className="embed-responsive-item"
            title="Mapa ModaSur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.951362137266!2d-70.6089650240376!3d-33.417988995851005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf69d4854951%3A0x9a87ef2fefaad0df!2sCenco%20Costanera!5e1!3m2!1ses!2scl!4v1753714300097!5m2!1ses!2scl"
            allowFullScreen
            loading="lazy"
            style={{ width: '100%', height: '100%', border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

