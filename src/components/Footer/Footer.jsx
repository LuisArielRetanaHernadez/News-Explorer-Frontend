import './Footer.css';

import facebookIcon from '../../images/fb.png';
import githubIcon from '../../images/github.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper footer__wrapper--flex">
                <div className="footer__content">
                    <p>&copy; 2023 News Explorer. All rights reserved.</p>
                </div>

                <nav className="footer__navigation">
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item"><a href="/" className="footer__navigation-link">Inicio</a></li>
                        <li className="footer__navigation-item"><a href="/saved-news" className="footer__navigation-link">Practicum</a></li>
                    </ul>

                    <ul className="footer__navigation-list footer__navigation-list--social">
                        <li className="footer__navigation-item">
                            <a href="#" className="footer__navigation-link" aria-label="Facebook">
                                <img className="footer__link-icon" src={facebookIcon} alt="" />
                            </a>
                        </li>
                        <li className="footer__navigation-item">
                            <a href="#" className="footer__navigation-link" aria-label="GitHub">
                                <img className="footer__link-icon" src={githubIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
