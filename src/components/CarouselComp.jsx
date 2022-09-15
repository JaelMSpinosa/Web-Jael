import { useEffect, useState } from "react";
import TarjetaPelicula from "./TarjetaPelicula";

function ListarPeliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("json/peliculas.json")
      .then(response => response.json())
      .then(datos => {
        setPeliculas(datos)
      })
  }, []);
  return peliculas;
}

function CarouselComp() {

  const peliculas = ListarPeliculas();

  return (
    <section className="moviePage">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          {peliculas.map(item => (
            <div className='carousel-item active'>
              <TarjetaPelicula
                className="d-block w-100"
                titulo={item.titulo}
                imagen={item.imagen}
                synopsis={item.synopsis}
              />
            </div>
          ))}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default CarouselComp;