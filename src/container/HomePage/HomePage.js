import React from "react";
import InputFile from "../../components/InputFile";
import FilmList from "../../components/FilmList";
import s from "./index.module.css";
import SearchInput from "../SearchInput";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <InputFile />
      <div className={s.content}>
        <div className={s.filmList}>
          <FilmList />
        </div>
        <div className={s.searchInput}>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
