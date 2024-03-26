import React from 'react';
import { NavLink } from 'react-router-dom'; 

import '../style/CardModule1.css';

function Card_1({ title, cover, id }) {
  return (
    <NavLink to={`/LodgmentPage/${id}`} className="nav_link">
      <div className="card_module1_block">
        <img src={cover} alt={title}/>
        <h2>{title}</h2>
      </div>
    </NavLink>
  );
}

export default Card_1;

