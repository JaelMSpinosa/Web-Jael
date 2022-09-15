import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../stylesheets/navBarComp.css'

function NavbarComp() {

  return (
    <nav className="navbar navbar-expand-lg bg-color-nav" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Annuar Shooping</a>
        <div className="d-flex justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">Inicio</a>
            <a className="nav-link" href="/moviePage">Peliculas</a>
            <a className="nav-link disabled" href="#">Comming Soon</a>
          </div>
        </div>
      </div>
    </nav >
  );

}

export default NavbarComp;