import React , { Component } from "react";
import { connect } from 'react-redux';
import { addFilm } from '../../ReduxStore/actions';

class AddFilmPage extends Component {

  state = {
    newfilm: {
      Title: "",
      ReleaseYear: "",
      Format: "",
      Stars: "",
    },
    isValid: false,
  }

  addFilmHandler = () => {
    let data = this.state.newfilm;
    this.props.addFilm(data);
    this.setState({
      newfilm: {
        Title: "",
        ReleaseYear: "",
        Format: "",
        Stars: "",
      },
      isValid: false,
    })
  }

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

  render(){
    const { Title, ReleaseYear, Format, Stars } = this.state.newfilm;
    return (
      <div>
        <h3>Add new film</h3>
        <div>
          <label>Titel:</label>
          <input 
          value={Title}
          onChange={e => this.checkValidForm(e, "Title")}
          />
        </div>
        <div>
          <label>Release Year:</label>
          <input 
          value={ReleaseYear}
          onChange={e => this.checkValidForm(e, "ReleaseYear")}
          />
        </div>
        <div>
          <label>Format:</label>
          <input 
          value={Format}
          onChange={e => this.checkValidForm(e, "Format")}
          />
        </div>
        <div>
          <label>Stars:</label>
          <input 
          value={Stars}
          onChange={e => this.checkValidForm(e, "Stars")}
          />
        </div>
        <div>
            <button
            disabled={!this.state.isValid}
            onClick={this.addFilmHandler}
            >ADD</button>
        </div>
      </div>
    );
  }
};

const mapState = (state) => {
  console.log(state);
  return{
    film: state.filmList,
  }
}

const mapDispatchToprops = {
addFilm,
};

export default connect(mapState, mapDispatchToprops)(AddFilmPage);
