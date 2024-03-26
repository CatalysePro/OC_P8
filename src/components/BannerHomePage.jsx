
import React from 'react';
import img_banner_index from '../pictures/images/image_banner_index.png';
import '../style/BannerHomePage.css'; 

function BannerHomePage() {
  return (
    <div className="banner_homepage">
      <img src={img_banner_index} alt="Bord de mer rocheux et arboré en hiver" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default BannerHomePage;