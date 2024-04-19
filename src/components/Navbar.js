import React from 'react';
import '../styles/styles.css';  
import robotLogo from "../styles/robotLogo.png";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#App">
        <img src={robotLogo} width="30" height="30" class="d-inline-block align-top logo-margin-right" alt="robotLogo" loading="lazy"></img>
        Bot-O-Mat
    </a>
    </nav>
  );
}

export default Navbar;
