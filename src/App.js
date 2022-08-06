/** @format */

import { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Iphone from "./components/Iphone.js";
import Four04 from "./components/Four04.js";
import Mac from "./components/Mac";
import YouTubeVideos from "./components/YouTubeVideos";
import Productpage from "./components/ProductPage";
import SingleAppleProduct from "./components/SingleAppleProduct";

import "./css/styles.css";
import "./css/bootstrap.css";
import "./components/YouTubeVideos.css";
import "./components/YouTubeVideos.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Iphone' element={<Iphone />} />
          <Route path='/mac' element={<Mac />} />
          <Route path='*' element={<Four04 />} />
          
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
