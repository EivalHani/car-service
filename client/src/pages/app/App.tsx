import React, { FC, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact } from '../contact/contact';
import { Forgot } from '../forgot/forgot';
import { Home } from '../home/home';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { Error } from '../error/error';
export const App: FC = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/error' element={<Error />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Fragment>
    </Router>
  );
};
