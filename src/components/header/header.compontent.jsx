import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.styles.scss';

class Header extends React.Component {

    toggleStylizedLink(e, type) {
        type === 'enter' ? e.target.classList.add('hovered') : e.target.classList.remove('hovered');
    }

    render() {
        return(
        <div className="header">
            <Link className="logo" to="/">
                Home
            </Link>
            <div className="options">
                <Link className="option" to="/blogs" onMouseEnter={(e) => this.toggleStylizedLink(e, 'enter')} onMouseLeave={(e) => this.toggleStylizedLink(e, 'leave')}>
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
    }
}

export default Header;