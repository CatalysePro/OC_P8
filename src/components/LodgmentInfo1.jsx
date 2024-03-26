import React from 'react';
import '../style/LodgmentInfo1.css';
import star_full from '../pictures/icons/star_full.png';
import star_empty from '../pictures/icons/star_empty.png';

// Define a functional component called LodgmentInfo1, receiving props as arguments
function LodgmentInfo1({ title, location, hostName, hostPicture, tags, rating }) {
  // Define a function to render star icons based on the rating
  const renderStars = () => {
    // Calculate the number of full stars and empty stars (return an entire nb thx to Math.floor fx)
    const fullStars = Math.floor(rating);
    const emptyStars = Math.floor(5 - rating);

    // Initialize an array to store JSX elements of star icons
    const stars = [];

    // Loop to push full star icons into the stars array thx to push fx
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`star-${i}`} src={star_full} alt="Star red" />);
    }

    // Loop to push empty star icons into the stars array thx to push fx
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-star-${i}`} src={star_empty} alt="Star grey" />);
    }

    // Return the array of star icons
    return stars;
  };

  // Render the JSX content of the component
  return (
    <div className="lodgment_info1">
      <div className="lodg_TLT_BLOCK">
        <div className="lodgment_Title">{title}</div>
        <div className="lodgment_Location">{location}</div>
        <div className="lodgment_Tags_block">
          {/* Map through tags array to render each tag */}
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="lodg_HR_BLOCK">
        <div className="lodgment_Host_block">
          <div className="lodgment_host_name">{hostName}</div>
          <div className="lodgment_host_picture">
            <img src={hostPicture} alt="Host" />
          </div>
        </div>

        <div className="lodgment_Rating_block">
          {/* Render stars using renderStars function defined here above */}
          {renderStars()}
        </div>
      </div>
    </div>
  );
}

export default LodgmentInfo1;
