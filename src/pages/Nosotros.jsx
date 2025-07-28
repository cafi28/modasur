export default function Nosotros() {
    return (
      <div className="container py-5">
        {/* Misión */}
        <section className="mb-5 p-4 bg-white rounded shadow-sm">
          <h3 className="text-center font-weight-bold mb-3">Nuestra Misión</h3>
          <p className="text-center lead">
            Inspirar confianza y estilo en cada clienta, ofreciendo prendas seleccionadas con cuidado,
            que destaquen su personalidad y la hagan sentir cómoda en cualquier ocasión.
          </p>
          <div className="row mt-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src="/imagenes/imagen27.jpg" alt="Equipo ModaSur" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="lead">
                Nuestro equipo trabaja día a día para que cada prenda refleje calidad, estilo y autenticidad,
                cuidando cada detalle desde el diseño hasta la atención final en nuestras tiendas.
              </p>
            </div>
          </div>
        </section>
  
        {/* Visión */}
        <section className="mb-5 p-4 bg-white rounded shadow-sm">
          <h3 className="text-center font-weight-bold mb-3">Nuestra Visión</h3>
          <p className="text-center lead">
            Ser reconocidos como la marca líder en moda femenina de la región, expandiendo nuestra presencia
            con tiendas físicas y una plataforma online ágil, siempre a la vanguardia de las últimas tendencias.
          </p>
          <div className="row mt-4">
            <div className="col-md-6 d-flex align-items-center">
              <p className="lead">
                Seguimos creciendo junto a nuestras clientas, adaptándonos a sus gustos y necesidades,
                innovando cada temporada y expandiendo nuestra familia ModaSur.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/imagenes/imagen25.jpg" alt="Tienda ModaSur" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </section>
  
        {/* Equipo */}
        <section className="mb-5 p-4 bg-white rounded shadow-sm text-center">
          <h3 className="font-weight-bold mb-3">Nuestro Equipo</h3>
          <p className="lead mb-4">
            Detrás de cada prenda y cada sonrisa de nuestras tiendas hay un equipo apasionado por la moda y la atención
            personalizada. Diseñadores, asesores y personal de ventas trabajan en conjunto para brindar una experiencia
            memorable a cada clienta.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src="/imagenes/imagen26.jpg" alt="Equipo ModaSur" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </section>
      </div>
    );
  }
  