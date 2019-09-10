import React from 'react';
import s from "./index.module.css";

const AddFilmForm = props => {
    const {
      newfilm: { Title, ReleaseYear, Format, Stars },
      isValid,
      checkValidForm,
      addFilmHandler
    } = props;
  
    return (
      <div className={s.form}>
        <h3 className={s.form_h}>Add new film</h3>
        <div className={s.form_elem}>
          <label className={s.label}>Titel:</label>
          <input
            className={s.input}
            value={Title}
            onChange={e => checkValidForm(e, "Title")}
          />
        </div>
        <div className={s.form_elem}>
          <label className={s.label}>Release Year:</label>
          <input
            className={s.input}
            value={ReleaseYear}
            onChange={e => checkValidForm(e, "ReleaseYear")}
          />
        </div>
        <div className={s.form_elem}>
          <label className={s.label}>Format:</label>
          <input
            className={s.input}
            value={Format}
            onChange={e => checkValidForm(e, "Format")}
          />
        </div>
        <div className={s.form_elem}>
          <label className={s.label}>Stars:</label>
          <input
            className={s.input}
            value={Stars}
            onChange={e => checkValidForm(e, "Stars")}
          />
        </div>
        <div className={s.form_elem}>
          <button className={s.btn} disabled={!isValid} onClick={addFilmHandler}>
            ADD NEW FILM
          </button>
        </div>
      </div>
    );
  };

export default AddFilmForm;