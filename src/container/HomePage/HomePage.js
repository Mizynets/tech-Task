import React, { Component } from "react";
import InputFile from "../../components/InputFile";
import FilmList from "../../components/FilmList";
import s from "./index.module.css";
import SearchInput from "../SearchInput";

class HomePage extends Component {
  state = {
    inputValue: "",
    searchTypeTitle: true
  };

  inputValueOnChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  searchOnChange = e => {
    this.setState({
      searchTypeTitle: JSON.parse(e.target.value)
    });
  };

  render() {
    return (
      <div className={s.homePage}>
        <InputFile />
        <div className={s.content}>
          <div className={s.filmList}>
            <FilmList filterInfo={this.state}/>
          </div>
          <div className={s.searchInput}>
            <SearchInput
              inputValueOnChange={this.inputValueOnChange}
              searchOnChange={this.searchOnChange}
              inputValue={this.state.inputValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
