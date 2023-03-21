
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './COMPONENT/DETAIL_PAGE/Detail';
import Header from './COMPONENT/HEADER_PAGE/Header';
import Home from './COMPONENT/HOME_PAGE/Home';
import LoginPage from './COMPONENT/LOGIN_PAGE/Login';
import Videos from './COMPONENT/VIDEO_PAGE/Video';

function App() {
  return (
    <>
      <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/video" element={<Videos/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
