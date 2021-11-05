import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../assests/css/profile.css';

const Profil = () => {
         //state user
         const [user, setUser] = useState({});
         //function "fetchData"
         const fetchData = async () => {
             await axios.get('/api/user')
             .then((response) => {
                 //set response user to state
                 setUser(response.data);
             })
         }
         //hook useEffect
         useEffect(() => {
             
             //call function "fetchData"
             fetchData();
         }, [])


    return (
<div class="container">
    <div class="main-body" >
    
       
    <h1 class="mt-4">Profile</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active"> <Link to='/admin/dashboar'>Dashboard</Link> / Profile </li>
            </ol>
       
          <div class="row gutters-sm">
            <div class="col-md-8 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4> {user.name} </h4>
                      <p class="text-secondary mb-1"> {user.email} </p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                </div>
                </div>
              </div>
            </div>
            
        </div>
    </div>
    )
}

export default Profil;
