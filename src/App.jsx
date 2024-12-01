import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Section from "./components/Section";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swiperrr from "./components/Swiperr";

function App() {
  return (
    <>
      <Header/>
      <Swiperrr/>
      <ToastContainer />
      <Products />
    </>
  );
}

export default App;
