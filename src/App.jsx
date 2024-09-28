import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenuCategories from "./components/MenuCategories";
import SpecialDishes from "./components/SpecialDishes";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <HeroSection />
                <MenuCategories />
                <SpecialDishes />
                <Testimonials />
                <Services />
            </main>
            <Footer />
        </div>
    );
}

export default App;