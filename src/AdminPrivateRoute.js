
import axios from 'axios';
import React,{ useState,useEffect  } from 'react';
import {Route,Redirect,useHistory} from 'react-router-dom';
import MasterLayout from './components/Admin/MasterLayout';
import swal from 'sweetalert';

const AdminPrivateRoute = ({rest}) => {
    const [Authenticated, setAuthencated] = useState(false);
    const [loading, setLoading] = useState(true);
    const history=useHistory();
        useEffect(() => {

            axios.get(`/api/checkingAuth`).then(res => {
                if(res.status === 200)
                {
                    setAuthencated(true);
                }
                setLoading(false);
            });
            
            return () => {
                setAuthencated(false);
              };
        }, []);

        axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
            if(err.response.status === 401)
            {
                swal("Login Dulu K kaka",err.response.data.message, "warning");
                history.push('/signin')
            }
            return Promise.reject(err);
        });
        
        axios.interceptors.response.use(function(response) {
            return response;
        }, function (error) {
            if(error.response.status === 403)
                {
                    swal("Upsss! Jalur Terlarang",error.response.data.message, "warning");
                    history.push('/');

                } else if(error.response.status === 404)
                    {
                        swal("Upsss! Tidak Ketemu",error.response.data.message, "warning");
                        history.push('/');
                    }
                    return Promise.reject(error);
            }
        );
            
        

        if(loading)
        {
           return <h1> Sabarrrr Yaaaaaaaaaa</h1>
        }
  

    return (
        <Route {...rest}
        render={ ({props, location}) => 
         Authenticated ?
        ( <MasterLayout {...props} />) : 
        ( <Redirect to={{pathname: "/signin", state: {from: location} }} /> )
         } />
    )
}

export default AdminPrivateRoute
