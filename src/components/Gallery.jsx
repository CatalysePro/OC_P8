import React from 'react';
import '../style/Gallery.css';

import CardModule1 from '../components/CardModule1';
import data from '../data/lodgments.json'; 

function Gallery() {
  return (
    <div className="gallery_block">
      <div className="cards_container">
        {data.map(item => (
          <CardModule1
            key={item.id}
            title={item.title}
            cover={item.cover}
            id={item.id}
          />
      ))}
      </div>
    </div>
  );
}

export default Gallery;
