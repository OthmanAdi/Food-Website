import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <p>
                <span>F</span>oodi
              </p>
            </div>
            <p className='footer-text'>Savor the artistry where every dish is a culinary masterpiece</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Useful links</h3>
              <p><a href="#" target="_blank" rel="noopener noreferrer">About us</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Events</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Blogs</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">FAQ</a></p>
            </div>
            <div>
              <h3>Main Menu</h3>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Home</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Offers</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Menus</a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Reservation</a></p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p><a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">example@email.com</a></p>
              <p>+64 958 248 966</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Social media</a></p>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2024 VerveBridge | All rights reserved
        </div>
      </footer>
  );
}

export default Footer;