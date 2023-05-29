import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewUser from './components/NewUser';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/home/Home';
import AddBook from './components/addbook/AddBook';


function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/addBook' element={<AddBook/>}/>
    </Routes>
  </div>
  );
}

export default App;
