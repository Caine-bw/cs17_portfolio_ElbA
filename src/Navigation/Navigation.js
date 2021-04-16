import React from 'react';
import './Navigation.sass';
import {Link} from 'react-router-dom'


function Navigation(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><img className="mylogo" src="/img/Swan.jpg"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">Acceuil</a>
              </li>
              </Link>
              <Link to="Projets">
              <li className="nav-item">
                <a className="nav-link active">Projets</a>
              </li>
              </Link>
              <Link to="/Skills">
              <li className="nav-item">
                <a className="nav-link active" aria-disabled="true">Skills</a>
              </li>
              </Link>
              <Link to="/Contact">
              <li className="nav-item">
                <a className="nav-link active" aria-disabled="true">Contact</a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
</div>
    )
}

export default Navigation;