import React from 'react';
import ShowNhide from './ShowNhide'; 
import '../style/LodgmentInfo2.css';

function LodgmentInfo2({ explanation, stuff }) {
  return (
    <div className="lodgment_info2">
      <div className="description_BLOCK">
      {/* Utilisez le composant ShowNhide pour gérer l'affichage de la description */}
      <ShowNhide title="Description" content={explanation} />
      </div>
      <div className="equipments_BLOCK">
      {/* Utilisez le composant ShowNhide pour gérer l'affichage des équipements */}
      <ShowNhide title="Équipements" content={<ul>{stuff.map((item, index) => <li key={index}>{item}</li>)}</ul>} />
      </div>
    </div>
  );
}

export default LodgmentInfo2;
