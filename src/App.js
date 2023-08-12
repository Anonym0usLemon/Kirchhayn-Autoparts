import './App.scss';
import { Route, Routes } from "react-router-dom"; 

// import components
import Header from "./components/Header/Header";
import UsedVehicles from './components/UsedVehicles/UsedVehicles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='Home'>
      <Header/> 
      <UsedVehicles/>
      <Footer/>
    </div>
  );
}

export default App;
