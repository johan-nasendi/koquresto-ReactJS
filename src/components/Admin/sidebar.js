import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Sidebar = () => {

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
    }, []);




    return (
       
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link to="/admin/dashboard" className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </Link>
                <Link to="/admin/profil" className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Profile
                </Link>
               
    
             </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            {user.name}
        </div>
    </nav>
     
    )
}

export default Sidebar
