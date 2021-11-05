import React,{useEffect,useState} from 'react'
import SignIn from '../components/Signin'
import SkeletonSign from '../components/Signin/SkeletonSign';

function SigninPage() {
  

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
        
        <SignIn />
        }
        </>
    );
};

export default SigninPage
