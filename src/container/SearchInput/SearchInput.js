import React from "react";
import s from "./index.module.css";
import icon from "../../assets/search-icon.png";

const SearchInput = ({searchOnChange, inputValueOnChange, inputValue}) => {
    return (
        <div className={s.searchInput}>
          <div className={s.inputItem}>
            <input
              className={s.radioInput}
              name="rad"
              type="radio"
              id="id-1"
              defaultChecked
              value={true}
              onChange={e => searchOnChange(e)}
            />
            <label className={s.label} htmlFor="id-1">
              По названию
            </label>
          </div>
    
          <div className={s.inputItem}>
            <input
              className={s.radioInput}
              name="rad"
              type="radio"
              id="id-2"
              value={false}
              onChange={e => searchOnChange(e)}
            />
            <label className={s.label} htmlFor="id-2">
              По автору
            </label>
          </div>
    
          <div className={s.inputItem}>
            <input
              className={s.textInput}
              type="text"
              value={inputValue}
              onChange={e => inputValueOnChange(e)}
            />
            <img className={s.imgSearch} src={icon} alt="search" />
          </div>
        </div>
      );
}

export default SearchInput;