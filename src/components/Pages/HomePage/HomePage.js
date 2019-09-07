import React from "react";
import InputFile from "../../InputFile/InputFile";
import FilmList from "../../FilmList";
import s from './index.module.css';

const HomePage = () => {
  return (
    <div className={s.HomePage}>
      <InputFile />
      <FilmList />
    </div>
  );
};

export default HomePage;