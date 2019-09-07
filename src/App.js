import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomePage from "./components/Pages/HomePage";
import AddFilmPage from "./components/Pages/AddFilmPage/AddFilmPage";
import { Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddFilmPage}/>
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     data: null
//   };

 
  // showFile = async e => {
  //   e.preventDefault();
  //   const reader = new FileReader();
  //   reader.onload = async e => {
  //     const text = e.target.result;
  //     let res = this.convertToJson(text);
  //     console.log(res);
  //   };
  //   reader.readAsText(e.target.files[0]);
  // };

//   render = () => {
//     return (
//       <div>
//         <input type="file" onChange={e => this.showFile(e)} />
//       </div>
//     );
//   };
// }

// export default App;
