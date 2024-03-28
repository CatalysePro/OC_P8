import React, { useState } from 'react';
// import '../style/ShowNhide.css'; // css managed by each component using ShowNhide
import img_arrow_up from '../pictures/icons/arrow_up.png';

function ShowNhide({ title, content }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="showNhide_BLOCK">
      <div className="showNhide_title top_line" onClick={toggleVisibility}>
        <h3>{title}</h3>
        <img
          className={`arrow_up ${isVisible ? 'rotate180' : ''}`}
          src={img_arrow_up}
          alt="chevron direction up"
          
        />
      </div>
      <div className={`hidden_paragraph explanation ${isVisible ? 'show_paragraph' : ''}`}>
        <div className="explanation">{content}</div>
      </div>
    </div>
  );
}

export default ShowNhide;
