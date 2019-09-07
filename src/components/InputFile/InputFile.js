import React from "react";
import s from './index.module.css';

const InputFile = () => {
  return (
    <div className={s.InputFile}>
      <input className={s.input} type="file" />
    </div>
  );
};

export default InputFile;
