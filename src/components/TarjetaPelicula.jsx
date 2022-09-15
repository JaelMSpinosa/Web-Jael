import Cartelera from '../image/cartelera1.jpg'
import '../stylesheets/tarjetaPelicula.css'

function TarjetaPelicula({ titulo, imagen, synopsis, duracion, actores, clasificacion }) {
  return (
    <div className='contenedor-tarjeta'>
      <section className='tarjeta'>
        <header className='titulo'>
          <h2>{titulo}</h2>
        </header>
        <article className='info'>
          <img src={imagen} alt="cartelera" className='cartelera' />
          <section className='synopsis'>
            <h3>Synopsis</h3>
            <p>{synopsis}
            </p>
          </section>
          <aside>
            <h4>Duracion: {duracion}</h4>
            <ul>
              <li>{actores}</li>
              <li>{actores}</li>
              <li>{actores}</li>
            </ul>
            <h3>Clasificacion</h3>
            <h3>{clasificacion}</h3>
          </aside>
        </article>
      </section>
    </div>
  );
}

export default TarjetaPelicula;