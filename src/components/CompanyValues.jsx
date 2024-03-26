import React from 'react';
import ShowNhide from './ShowNhide';
import '../style/CompanyValues.css';

function CompanyValues({ values }) {
  return (
    <div className="company_values">
      {values.map((value, index) => (
        <div className="value_BLOCK" key={index}>
          
            <ShowNhide title={value.title} content={value.content} />

          
        </div>
      ))}
    </div>
  );
}

export default CompanyValues;
