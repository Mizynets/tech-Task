import React, { Component } from "react";
import s from "./index.module.css";
import icon from "../../accets/search-icon.png";
import { connect } from "react-redux";
import { searchValue } from "../ReduxStore/actions";

class SearchInput extends Component {
  state = {
      inputValue: "",
      searchTypeTitle: true,
  };

  inputValueOnChange = e => {
    this.setState({
        inputValue: e.target.value,
    })
    this.props.searchValue(this.state);
  };

  searchOnChange = e => {
    this.setState({
      searchTypeTitle: JSON.parse(e.target.value),
    })
  }

  render() {

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
            onChange={e => this.searchOnChange(e)}
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
          // defaultChecked={this.state.searchTypeAuthor}
          value={false}
          onChange={e => this.searchOnChange(e)}
          />
          <label className={s.label} htmlFor="id-2">
            По автору
          </label>
        </div>

        <div className={s.inputItem}>
          <input 
          className={s.textInput}
          type="text"
          value={this.state.inputValue}
          onChange={e => this.inputValueOnChange(e)}
          />
          <img className={s.imgSearch} src={icon} alt="search" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchValue
};

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
