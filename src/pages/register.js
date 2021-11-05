import React,{useState,useEffect} from 'react'
import Register from '../components/Register'
import SkeletonSign from '../components/Signin/SkeletonSign';

const  Register = () => {

    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const timing = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timing);
    }, []);

    return (
        <>
        {loading && <SkeletonSign/>}
        {!loading && 
         <Register />
        }
           
        </>
    );
};

export default Register
