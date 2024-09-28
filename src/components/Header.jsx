import { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import SearchIcon from "../assets/icon _search_.png";
import BagIcon from "../assets/fi-rr-shopping-bag.png";
import ContactIcon from "../assets/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Dropdown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    Dropdown.propTypes = {
        title: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    return (
        <div className="dropdown">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-button"
            >
                {title}
                <FontAwesomeIcon icon={fas.faChevronDown} className={`dropdown-icon ${isOpen ? 'clicked' : ''}`} />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option, index) => (
                        <a key={index} href="#" className="dropdown-menu-item">
                            {option}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <p>
                    <span>F</span>oodi
                </p>
            </div>
            <nav className={`nav ${isMobileNavOpen ? 'mobile-open' : ''}`}>
                <a href="#" className="nav-link active">
                    Home
                </a>
                <Dropdown
                    title="Menu"
                    options={["Breakfast", "Lunch", "Dinner", "Desserts"]}
                />
                <Dropdown
                    title="Services"
                    options={["Catering", "Delivery", "Online Ordering", "Gift Cards"]}
                />
                <a href="#" className="nav-link">
                    Offers
                </a>
            </nav>
            <div className={`Icon-container ${isSearchOpen ? "show-search-bar" : ""}`}>
                <img
                    src={SearchIcon}
                    alt=""
                    id="search-icon"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                <input type="search" placeholder="Search" className="search-bar" />
                <img src={BagIcon} alt="" id="bag-icon" />
                <span className="bag-item-count">0</span>
            </div>
            <a href="#footer" className="cta">
                <img src={ContactIcon} alt="" />
                Contact
            </a>
            <div className="mobile-nav">
                <button
                    className="mobile-nav-button"
                    aria-label="Toggle navigation menu"
                    onClick={handleMobileNavToggle}
                >
                    <FontAwesomeIcon icon={isMobileNavOpen ? fas.faTimes : fas.faBars} />
                </button>
                {isMobileNavOpen && (
                    <div className="mobile-nav-links">
                        <a href="#" className="mobile-nav-link active">Home</a>
                        <Dropdown
                            title="Menu"
                            options={["Breakfast", "Lunch", "Dinner", "Desserts"]}
                        />
                        <Dropdown
                            title="Services"
                            options={["Catering", "Delivery", "Online Ordering", "Gift Cards"]}
                        />
                        <a href="#" className="mobile-nav-link">Offers</a>
                        <a href="#footer" className="mobile-nav-link">Contact</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;