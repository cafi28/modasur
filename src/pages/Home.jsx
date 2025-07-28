/// Archivo: src/pages/Home.jsx
export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4 font-weight-bold">¡Bienvenidos a ModaSur!</h1>
      <p className="lead">Explora las últimas tendencias en moda para cada temporada.</p>

      <div className="container mt-5">
        <h2 className="text-center font-weight-bold mb-4">Nuestras Colecciones</h2>
        <div id="carouselExampleIndicators" className="carousel slide shadow-sm rounded" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/imagenes/imagen10.jpg" className="d-block w-100 rounded" alt="ModaSur 1" />
            </div>
            <div className="carousel-item">
              <img src="/imagenes/imagen11.jpg" className="d-block w-100 rounded" alt="ModaSur 2" />
            </div>
            <div className="carousel-item">
              <img src="/imagenes/imagen12.jpg" className="d-block w-100 rounded" alt="ModaSur 3" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Siguiente</span>
          </a>
        </div>
      </div>
    </div>
  );
}
