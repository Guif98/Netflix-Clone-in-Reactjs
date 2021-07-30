import React from 'react';
import Netflix from './netflix-logo.svg';

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="logo-div">
                <a href="#"><img className="netflix-logo" src={Netflix}></img></a>
            </div>
            <div>
                <button className="btn-get-started">
                    ASSINE A NETFLIX
                </button>
                <a className="btn-login">
                    Entrar
                </a>
            </div>
        </div>
    )
}

export default Navbar