import "./HeroSection.css";
import spicyNoodles from "../assets/Spicy-noodles.png";
import vegySalad from "../assets/vegy-salad.png";
import heroImage from "../assets/hero.png";
import sideHero from "../assets/sideHero.png";
import playIcon from "../assets/playIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegular } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const HeroSection = () => {
  const MAX_RATING = 5;
  const actionItems = [
    {
      image: spicyNoodles,
      alt: "noodles",
      name: "noodles",
      rating: 4,
      price: "$18.00",
    },
    {
      image: vegySalad,
      alt: "Veg salad",
      name: "Veg salad",
      rating: 3.5,
      price: "$23.00",
    },
  ];

  return (
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Dive into Delights Of Delectable{" "}
              <span className="highlight">Food</span>
            </h1>
            <p className="hero-subtitle">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="cta-container">
              <button className="cta-button primary">Order Now</button>
              <div className="watch-video">
                <span>Watch Video</span>
                <button className="cta-button secondary">
                  <img src={playIcon} alt="Play video" />
                </button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div id="bg-circle">
                <img src={sideHero} alt="Side hero" className="sideHero" />
                <img src={heroImage} alt="Hero" className="overlay-image" />
                <div className="action-container">
                  {actionItems.map((item, index) => (
                      <div key={index} className="action-item">
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="action-image"
                        />
                        <div className="action-details">
                          <p className="action-name">{item.name}</p>
                          <div className="action-rating">
                            {[...Array(MAX_RATING)].map((_, i) => (
                                <FontAwesomeIcon
                                    key={i}
                                    icon={i < Math.floor(item.rating) ? faStar : faRegular}
                                    style={{ color: "#F2C464" }}
                                />
                            ))}
                          </div>
                          <p className="action-price">{item.price}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;