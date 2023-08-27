import './App.scss';
import { Route, Routes } from "react-router-dom"; 

// import components
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home"
import SearchUsedCars from './components/Pages/SearchUsedCars/SearchUsedCars';
import Footer from './components/Footer/Footer';
import Contact from "./components/Pages/ContactUs/Contact";
import SearchUsedCarParts from "./components/Pages/SearchUsedCarParts/SearchUsedCarParts";
import NoPage from "./components/Pages/NoPage/NoPage"; 

function App() {
  return (
    <div className='App'>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/used-parts" element={<SearchUsedCarParts/>} />
        <Route path="/used-cars" element={<SearchUsedCars/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
