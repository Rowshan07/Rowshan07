import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode!=="light"?"dark":"primary"}`}>
        {/* bg-${props.mode==="light"?"primary":"success"}  */}
        {/* navbar-${props.mode==="light"?"dark":"light"} */}
        {/* text-${props.mode==="light"?"dark":"light"} this can be include to change the color of text */}
  <Link className="navbar-brand" to="/TextForm">{props.title}</Link>
  <button className="navbar-toggler btn-dark" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">{props.homeText} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a href='/' className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <div className="mx-2 text-light"><strong>Themes</strong></div>
      <div className="color-pallet darkblue" id='darkblue' onClick={props.toggleTheme}></div>
      <div className="color-pallet indigo" id='indigo' onClick={props.toggleTheme}></div>
      <div className="color-pallet darkred" id='darkred' onClick={props.toggleTheme}></div>
      <div className="color-pallet darkslategray" id='darkslategray' onClick={props.toggleTheme}></div>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    </div>;
}
const defaultParameters = {title : "ROWSHAN",
    homeText : "HOME",};


// Setting prototype to props
const propTypes = {title : PropTypes.string,
               homeText : PropTypes.string,
};

// Giving prototype to Navbar props
Navbar.propTypes = propTypes;
Navbar.defaultParameters = defaultParameters;
;


export default Navbar;