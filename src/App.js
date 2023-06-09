import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Col, Row } from "react-bootstrap";
import SideBar from './components/SideBar';
import MyNav from './components/myNav';
import Discover from './components/Discover';
import Search from './components/Search';
import Artist from './components/Artist';

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
      <Row>
        <Col md={2}>
          <SideBar/>
        </Col>
        <Col md={10}>
          
            <MyNav/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/artist" element={<Artist/>}/>
                <Route path="/album" element={<Search/>}/>
              </Routes>
          
        </Col>
      </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
