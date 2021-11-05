import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import swal from 'sweetalert';
import axios from 'axios';

const Navbar = () => {

    
    const history=useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();

            axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Bye Bye eee!", res.data.message, "success");
                history.push('/signin');
            }
   
        });
    }

    return (  
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-success">
       
        <Link class="navbar-brand ps-3" to='/'>Ko qu Resto</Link>
        
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
       
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
            </div>
        </form>
       
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to="#!">Settings</Link></li>
                    <li><Link class="dropdown-item" to="#!">Activity Log</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" onClick={logoutSubmit}>Logout</Link></li>
                </ul>
            </li>
        </ul>
    </nav>
        
    )
}

export default Navbar
