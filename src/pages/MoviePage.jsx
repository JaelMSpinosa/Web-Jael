import NavbarComp from "../components/NavbarComp";
import TarjetaPelicula from "../components/TarjetaPelicula";
import '../stylesheets/movie.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselComp from "../components/CarouselComp";

function MoviePage() {
  return (
    <>
      <NavbarComp />
      <CarouselComp />
      <div class="card text-center bg-color-card">
        <div class="card-header bg-color-card">
          Featured
        </div>
        <div class="card-body bg-color-card">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted bg-color-card">
          2 days ago
        </div>
      </div>
    </>

  );

}

export default MoviePage;