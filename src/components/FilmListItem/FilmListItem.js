import React from 'react';
import s from './index.module.css';

const FilmListItem = ({title, year, format, stars}) => {
    return(
        <div className={s.FilmListItem}>
            <p className={s.text}><span className={s.description}>Name: </span>{title}</p>
            <p className={s.text}><span className={s.description}>Release Year: </span>{year}</p>
            <p className={s.text}><span className={s.description}>Format: </span>{format}</p>
            <p className={s.text}><span className={s.description}>Stars: </span>{stars}</p>
            <button className={s.btn} >Delete Film</button>
        </div>
    );
};

export default FilmListItem;