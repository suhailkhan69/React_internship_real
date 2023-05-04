import logo from './logo.svg';
import './App.css';
import ViewEmp from './components/ViewEmp';
import AddEmp from './components/AddEmp';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ViewEmp />}></Route>
        <Route path='/add' element={<AddEmp />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
