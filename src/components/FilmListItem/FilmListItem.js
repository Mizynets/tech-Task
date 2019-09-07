import React from 'react';
import s from './index.module.css';

const FilmListItem = () => {
    return(
        <div className={s.FilmListItem}>
            <p className={s.text}><span className={s.description}>Name: </span>Blazing Saddles</p>
            <p className={s.text}><span className={s.description}>Release Year: </span>1974</p>
            <p className={s.text}><span className={s.description}>Format: </span>VHS</p>
            <p className={s.text}><span className={s.description}>Stars: </span>Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn</p>
            <button className={s.btn} >Delete Film</button>
        </div>
    );
};

export default FilmListItem;