import React , { Component } from "react";

class AddFilmPage extends Component {
  render(){
    return (
      <div>
        <h3>Add new film</h3>
        <div>
          <label>Titel:</label>
          <input />
        </div>
        <div>
          <label>Release Year:</label>
          <input />
        </div>
        <div>
          <label>Format:</label>
          <input />
        </div>
        <div>
          <label>Stars:</label>
          <input />
        </div>
        <div>
            <button>ADD</button>
        </div>
      </div>
    );
  }
};

export default AddFilmPage;
