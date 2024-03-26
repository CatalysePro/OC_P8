import React from 'react';
import '../style/HomePage.css';
import Header from '../components/Header';
import BannerHomePage from '../components/BannerHomePage';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


function HomePage() {
  return (
    
      <div className="home_page">
        <Header />
        <BannerHomePage />
        <Gallery />
        <Footer />
      </div>
  );
}

export default HomePage;
