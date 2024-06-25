// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Faqs from './pages/faqs/faqs';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/faqs' element={<Faqs></Faqs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
