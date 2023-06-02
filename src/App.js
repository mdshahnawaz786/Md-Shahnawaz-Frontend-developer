import './App.css';
import GridPage from './Components/GridPage/GridPage';
import Landingpage from './Components/LandingPage/Landingpage';
import Nav from './Components/Navbar/Nav';
import { useEffect } from 'react';
import { gridDataa } from './Function/function';
import {Routes,Route} from "react-router-dom"
import Details from './Components/GridDetails/Details';
import { useDispatch, useSelector } from 'react-redux';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  const dispatch = useDispatch()
  const { gridData } = useSelector((initial) => {
    return initial;
  });

  useEffect(()=>{
    gridDataa(dispatch)
  },[])
  return (
    <div className="App">
     
     
      <Routes>
        <Route path='/' element={<><Nav/> <Landingpage/> <GridPage  gridData={gridData}/></>}/>
        <Route path="/details/:id" element={<><Nav/><Details/></>}/>
        <Route path="/search" element={<><Nav/><SearchPage/></>}/>
      </Routes>
    </div>
  );
}

export default App;
