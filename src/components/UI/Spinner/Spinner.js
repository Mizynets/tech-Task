import React from 'react';
import './index.css';

const Spinner = _ =>{
    return(
        <div className="spinner">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
};

export default Spinner;