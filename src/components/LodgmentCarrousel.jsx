import React, { useState } from 'react';
import '../style/LodgmentCarrousel.css';
import img_arrow_left from '../pictures/icons/arrow_left.png';
import img_arrow_right from '../pictures/icons/arrow_right.png';

function LodgmentCarrousel({ images }) {
  // Declare state variable currentImageIndex and setter function setCurrentImageIndex
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Definition of a function to navigate to the previous image
  const goToPrevious = () => {
    // Using setCurrentImageIndex to update the index of the current image
  // The function receives the previous index as an argument and returns the new index

    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
      // Decrease the current image index. If the current index is 0, loop back to the last index.

  // Function to navigate to the next image
  const goToNext = () => {
    
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

        // Increase the current image index. If the current index is the last index, loop back to the first index.
  };

  
   // Condition for making arrows and numbering visible or not depending of nb of images
   const renderArrowsNnumber = images.length > 1 ? (
    <div>
      <img className="arrow arrow_left" src={img_arrow_left} alt="chevron direction left" onClick={goToPrevious} />
      <img className="arrow arrow_right" src={img_arrow_right} alt="chevron direction right" onClick={goToNext} />
      <p className="lodgment_picture_rank">{currentImageIndex + 1}/{images.length}</p>
    </div>
  ) : null;

  return (
    <div className="lodgment_carrousel">
      {renderArrowsNnumber}
      <img className="lodgment_photo" src={images[currentImageIndex]} alt="Lodgment" />
    </div>
  );
};

export default LodgmentCarrousel;
