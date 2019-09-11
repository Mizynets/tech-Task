import React, { Component } from "react";
import s from "./index.module.css";
import { connect } from "react-redux";
import { addFilm } from "../../components/ReduxStore/actions";
import AddFilmForm from '../../components/AddFilmForm';

class AddFilmPage extends Component {
  state = {
    newfilm: {
      Title: "",
      ReleaseYear: "",
      Format: "",
      Stars: ""
    },
    isValid: false
  };

  addFilmHandler = () => {
    const data = this.state.newfilm;
    this.props.addFilm(data);
    const serialFilm = JSON.stringify([data]);
    localStorage.setItem('newFilm', serialFilm);
    this.setState({
      newfilm: {
        Title: "",
        ReleaseYear: "",
        Format: "",
        Stars: ""
      },
      isValid: false
    });
  };

  checkValidForm = (e, key) => {
    const filmForm = { ...this.state.newfilm };
    let filmFormEl = { ...filmForm[key] };
    filmFormEl = e.target.value;
    filmForm[key] = filmFormEl;

    const valueArr = Object.values(filmForm);
    let isValid = true;
    valueArr.forEach(value => (isValid = !!value.trim() && isValid));
    this.setState({ newfilm: filmForm, isValid });
  };

  render() {
    return (
      <div className={s.position_form}>
        <AddFilmForm
          {...this.state}
          checkValidForm={this.checkValidForm}
          addFilmHandler={this.addFilmHandler}
        />
      </div>
    );
  }
}
const mapState = state => {
  return {
    film: state.filmList
  };
};

const mapDispatchToprops = {
  addFilm
};

export default connect(
  mapState,
  mapDispatchToprops
)(AddFilmPage);
