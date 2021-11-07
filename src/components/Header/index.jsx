import React from 'react';

import camera from '../../img/camera.svg';

import './style.css';

const Header = () => (
    <header>
        <h1>
            <img className="logo" src={camera} alt="Logo" />
            V našem kině právě uvádíme
        </h1>
    </header>
);

export default Header;