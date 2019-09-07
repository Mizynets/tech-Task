import React from 'react';
import s from './index.module.css';
import icon from './error.png';

const ErrorIndicator = () => {
    return(
        <div className={s.Error_Indicator}>
            <img src={icon} alt="error icon"/>
            <h3 className={s.h_text}>BOOM!</h3>
            <p className={s.p_text}>Something was wrong</p>
        </div>
    );
};

export default ErrorIndicator;