import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomePage from "./components/Pages/HomePage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <HomePage />
      </Layout>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     data: null
//   };

//   convertToJson = text => {
//     let strText = text;
//     const arr = strText.split("\n");
//     const array_size = 4;
//     const sliced_array = [];

//     const filterArray = arr.filter(item => !!item)
//     const arrAllObjField = filterArray.map(item => {
//       const entries = item.split(":");
//       return {
//         [entries[0].trim()]: entries[1].trim()
//       }
//     })

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
