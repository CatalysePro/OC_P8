
import React from 'react';
import img_banner_about from '../pictures/images/image_banner_about.png';
import '../style/BannerAboutPage.css'; 

function BannerAboutPage() {
  return (
    <div className="banner_aboutpage">
      <img src={img_banner_about} alt="Vue montagnes et fleuve" />
      {/* <h1>Chez vous, partout et ailleurs</h1> */}
    </div>
  );
}

export default BannerAboutPage;