import React from 'react';
import './footer.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom';


const Footer = () => {
    const [github, linkedin, email] = [<FontAwesomeIcon icon={faGithub} />, <FontAwesomeIcon icon={faLinkedinIn} />, <FontAwesomeIcon icon={faEnvelope} />]
    return <div className="footer">
        <div className="contact-container">
            <a href="https://github.com/jeka2" target="_blank" className="link github-link">{github}</a>
            <a href="https://www.linkedin.com/in/yevgeniy-ivanov-9a5a40210/" target="_blank" className="link linkedin-link">{linkedin}</a>
            <a href="https://github.com/jeka2" target="_blank" className="link github-link">{email}</a>
        </div>
    </div>
}

export default Footer;