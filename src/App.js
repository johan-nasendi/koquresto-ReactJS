import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Redirect, Switch} from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';
import Fullmenu from './pages/Allmenu';
import Register from './components/Register';
import axios from 'axios';
import MasterLayout from './components/Admin/MasterLayout';
import AdminPrivateRoute from './AdminPrivateRoute';
import AllNews from './pages/AllNews'


// APi URL Register
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
   const token = localStorage.getItem('auth_token');
   config.headers.Authorization = token ? `Bearer ${token}` : '';
   return config;
});


function App() {
  return (
   <Router>
     <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/signin" component={SigninPage} exact />
        <Route path="/register" component={Register} exact /> */}
        <Route path="/signin" >
            {localStorage.getItem('auth_token') ? <Redirect to='/'/> : <SigninPage/>}
        </Route>

        <Route path="/register" >
            {localStorage.getItem('auth_token') ? <Redirect to='/'/> : <Register/>}
        </Route>

        <Route path="/allmenu" component={Fullmenu} exact />

        <Route path="/allnews" component={AllNews} exact />
        {/* <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} /> */}

        <AdminPrivateRoute path="/admin" name="Admin" />
        
     </Switch>
   </Router>
  );
};

export default App;
