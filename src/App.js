import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import { useRef } from 'react'
import { useNavigate, useLocation } from "react-router-dom"

const menu = [
  { title : 'Home', link : '/' },
  { title : 'Page1', link : 'page1' },
  { title : 'Page2', link : 'page2' },
  { title : 'Page3', link : 'page3' },
];

function App() {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const wrapRef = useRef(null);

  const movePage = (url) =>{
    if(pathname !== `/${url}` ){
      wrapRef.current.classList.replace('loaded', 'unloaded');
      setTimeout(()=> { 
        navigate(url);
        wrapRef.current.classList.replace('unloaded', 'loaded');
      } , 390)
    }
  }


  return (
    <div className="App">
      
      <NavBar menu={menu} movePage={movePage} />
      <div ref={wrapRef} className="wrap loaded">
        <Routes>
          <Route exact={true} path='/' element={<Home/>} />
          <Route exact={true} path='/page1' element={<Page1/>} />
          <Route exact={true} path='/page2' element={<Page2/>} />
          <Route exact={true} path='/page3' element={<Page3/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
