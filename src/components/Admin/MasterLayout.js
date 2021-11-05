import React from 'react'
import Footer from './footer.js'
import Navbar from './navbar.js'
import Sidebar from './sidebar.js'
import { Switch,Route,Redirect } from 'react-router-dom'
import '../../assests/admin/assets/css/styles.css';
import '../../assests/admin/assets/js/scripts.js';
import routes from '../../router/routes.js'


const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed" >
         <Navbar/>
         <div id="layoutSidenav">

         <div id="layoutSidenav_nav">
         <Sidebar/>
         </div>
          <div id="layoutSidenav_content">
                <main>
                    <Switch>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route 
                                    key ={idx} 
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <route.component {...props} />
                                    )}
                                    />
                                )
                            )
                        })}
                        <Redirect from="admin" to="/admin/dashboard" />
                    </Switch>
                </main>
           <Footer/>
         </div>

        </div>
     </div>
    )
}

export default MasterLayout;

