import './App.scss';
import { Route, Routes } from "react-router-dom"; 

// import components
import Header from "./components/Header/Header";
import UsedVehicles from './components/UsedVehicles/UsedVehicles';

function App() {
  return (
    <div className='Home'>
      <Header/> 
      <UsedVehicles/>
    </div>
  );
}

export default App;
