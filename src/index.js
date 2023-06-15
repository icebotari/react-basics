import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserComponent from './containers/UserComponent'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./containers/Header";
import AddNewUser from "./containers/AddNewUser";
import {Provider} from "react-redux";
import userStore from "./redux/userStore/store";
import UsersList from "./containers/UsersList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={userStore}>
          <Router>
              <Header/>
              <Routes>
                  <Route exact path = "/" element = {<App/>}/>
                  <Route exact path = "/users" element = {<UsersList/>}/>
                  <Route exact path = "/users/:userId" element = {<UserComponent/>}/>
                  <Route exact path = "/addUser" element = {<AddNewUser/>}/>
                  <Route exact path = "/updateUser" element = {<AddNewUser/>}/>
                  <Route exact path = "/deleteUser" element = {<AddNewUser/>}/>
              </Routes>
          </Router>
      </Provider>
  </React.StrictMode>
);
reportWebVitals();
