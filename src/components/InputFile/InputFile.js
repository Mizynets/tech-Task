import React from "react";
import s from "./index.module.css";
import { connect } from "react-redux";
import { filmLoaded } from "../ReduxStore/actions";

const InputFile = props => {
  const convertToJson = text => {
    let strText = text;
    const arr = strText.split("\n");
    const array_size = 4;
    const sliced_array = [];

    const filterArray = arr.filter(item => !!item);
    const arrAllObjField = filterArray.map(item => {
      const entries = item.split(":");
      entries[0] = entries[0].replace(/\s+/g, "");
      return {
        [entries[0].trim()]: entries[1].trim()
      };
    });
   

    for (let i = 0; i < arrAllObjField.length; i += array_size) {
      sliced_array.push(arrAllObjField.slice(i, i + array_size));
    }

    let finish = sliced_array.map(arr =>
      arr.reduce((ac, cur) => {
        return { ...ac, ...cur };
      }, {})
    );
    return finish;
  };

  const readFile = async e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);

      const resultPromise = await new Promise((resolve, reject) => {
        reader.onload = () => {
          const result = reader.result;
          resolve(convertToJson(result));
        };
        reader.onerror = () => {
          console.log(reader.error);
        };
      });
      return resultPromise;
    }
  };

  const uploadFilm = async e => {
    let data = await readFile(e).then(response => response);
    console.log(data);
    props.filmLoaded(data);
  };

  return (
    <div className={s.InputFile}>
      <input className={s.input} type="file" onChange={e => uploadFilm(e)} />
    </div>
  );
};

const mapDispatchToProps = {
  filmLoaded
};

export default connect(
  null,
  mapDispatchToProps
)(InputFile);
