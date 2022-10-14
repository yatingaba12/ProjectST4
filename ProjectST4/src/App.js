import './App.css';
import About from './component/pages/About';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact'
import Navbar from './component/layout/Navbar';
import Login from './component/pages/Sign';
import Crud from './component/pages/crud';
import Signup from './component/pages/signup';
import EditUser from './component/pages/EditUser'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/crud" element={<Crud/>}/> 
        <Route path="/signup" element={<Signup/>} />
        <Route exact path={"/edit/:id"} component={EditUser} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
