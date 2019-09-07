import React, { Component } from "react";
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        APP
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     data: null
//   };

//   convertToJson = text => {
//     const arr = text.split("\n");
//     let arrObjElem = [];
//     let arrAllObjField = [];
//     const array_size = 4;
//     const sliced_array = [];

//     arr.forEach(el => {
//       return arrObjElem.push(el.split(": "));
//     });

//     arrObjElem.forEach(el => {
//       if (el.length === 2) {
//         el[0] = el[0].replace(/\s+/g, "");
//         let objRes = {};
//         let zero = 0;
//         let one = 1;
//         objRes[el[zero]] = el[one++];
//         arrAllObjField.push(objRes);
//       }
//     });

//     for (let i = 0; i < arrAllObjField.length; i += array_size) {
//       sliced_array.push(arrAllObjField.slice(i, i + array_size));
//     }

//     let finish = sliced_array.map(arr =>
//       arr.reduce((ac, cur) => {
//         return { ...ac, ...cur };
//       }, {})
//     );

//     return finish;
//   };

//   showFile = async e => {
//     e.preventDefault();
//     const reader = new FileReader();
//     reader.onload = async e => {
//       const text = e.target.result;
//       let res = this.convertToJson(text);
//       console.log(res);
//     };
//     reader.readAsText(e.target.files[0]);
//   };

//   render = () => {
//     return (
//       <div>
//         <input type="file" onChange={e => this.showFile(e)} />
//       </div>
//     );
//   };
// }

// export default App;
