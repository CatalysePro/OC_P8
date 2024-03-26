import React from 'react';
import { useParams } from 'react-router-dom'; // hook for URL parameters extraction
import '../style/FullDescriptionPage.css';
import data from '../data/lodgments.json'; 
import Header from '../components/Header';
import LodgmentCarrousel from '../components/LodgmentCarrousel';
import LodgmentInfo1 from '../components/LodgmentInfo1';
import LodgmentInfo2 from '../components/LodgmentInfo2';
import Footer from '../components/Footer';
import ErrorPage from '../pages/ErrorPage';


function FullDescriptionPage() {
  const { idLodg } = useParams(); // get the id from the url
  

  // Filter data based on idLodg
  const lodgment = data.find(oneLodg => oneLodg.id === idLodg);

  // If no lodgment is found, render ErrorPage
  if (!lodgment) {
    return <ErrorPage />;
  }

  // if lodgment found
  return (
    
      <div className="full_description_page">
        <Header />
        <LodgmentCarrousel images={lodgment.pictures} /> 
        <LodgmentInfo1
          title={lodgment.title}
          location={lodgment.location}
          hostName={lodgment.host.name}
          hostPicture={lodgment.host.picture}
          tags={lodgment.tags}
          rating={lodgment.rating}
        />
        <LodgmentInfo2
          explanation={lodgment.description}
          stuff={lodgment.equipments}
        />
        <Footer />
      </div>
  );
}

export default FullDescriptionPage;
