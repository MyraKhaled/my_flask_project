import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './ComponentsAuth/Auth.css'
import ReactDOM from 'react-dom'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import RegisterPage from './Components/Auth/Register';
import LoginPage from './Components/Auth/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <div className="">
      <NavBar/>
      <Switch>
          <Route path="/register">
              <RegisterPage/>
          </Route>
          <Route path="/login">
              <LoginPage/>                
          </Route>    
      </Switch>
  </div>
  </Router>
);

ReactDOM.render(<App/>,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
