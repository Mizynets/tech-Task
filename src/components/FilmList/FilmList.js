import React from 'react';
import s from './index.module.css';
import FilmListItem from '../FilmListItem';

const FilmList = () => {
return(
    <ul className={s.FilmList}>
        <FilmListItem />
        <FilmListItem />
        <FilmListItem />
    </ul>
)
};

export default FilmList;