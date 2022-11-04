import React from 'react';
import { Route, Router, Navigate } from 'react-router-dom';
import Main from './Components/Main';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Newarchive from './Components/Newarchive';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Accountmain from './Components/AccountPage/Accountmain';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
    <Router>
      <Route index element={<SignUp />}/>
      <Route path='/main'element={<Main />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Accountmain />}/>
      <Route path='/newarchive' element={<Newarchive />}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
    </main>
    <Footer />
    </div>
  );
}

export default App;
