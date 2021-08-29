import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            Home
        </Link>
        <div className="options">
            <Link className="option" to="/blogs">
                Blogs
            </Link>
            <Link className="option" to="/projects">
                Projects
            </Link>
            <Link className="option" to="/about">
                About Me
            </Link>
        </div>
    </div>
)

export default Header;