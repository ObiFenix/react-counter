import React from 'react';
import logo from '../imgs/logo.svg';

export default () => {
    return (
        <header className="App-header">
            <span>OBI
                <img src={logo} className="App-logo" alt="logo" />
                <code>FENIX</code>
            </span>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                > Learning React
            </a>
        </header>
    );
}