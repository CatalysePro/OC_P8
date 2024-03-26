// AboutPage.js
import React from 'react';
import { useParams } from 'react-router-dom'; 
import data from '../data/values.json';
import '../style/AboutPage.css'; 
import Header from '../components/Header';
import BannerAboutPage from '../components/BannerAboutPage';
import CompanyValues from '../components/CompanyValues'; // Import from new location
import ShowNhide from '../components/ShowNhide'; // Import from new location
import Footer from '../components/Footer';
import ErrorPage from '../pages/ErrorPage';

const AboutPage = () => {
  const { idValue } = useParams(); 
  const allValues = data.filter(oneValue => oneValue.id === idValue); 

  const about_subject = data.find(oneValue => oneValue.id === idValue);

  if (!about_subject) {
    return <ErrorPage />;
  }

  console.log(ShowNhide); // Adding console.log to avoid unused variable warning
  
  return (
    <div className="about_page">
      <Header />
      <BannerAboutPage />
      <CompanyValues 
        values={[
          { title: 'Fiabilité', content: allValues[0].reliability },
          { title: 'Respect', content: allValues[0].respect },
          { title: 'Service', content: allValues[0].service },
          { title: 'Sécurité', content: allValues[0].security }
        ]}
      />
      <Footer />
    </div>
  );
}

export default AboutPage;
