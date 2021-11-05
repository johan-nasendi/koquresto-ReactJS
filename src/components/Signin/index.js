import React, {useState} from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import api from '../../Api';
import { useHistory,Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail,SiGithub } from 'react-icons/si';
import {Container,FormWrap,Icon,FormContent,Form,FormH1,
    FormLabel,FormInput,FormButton,Text,TextA} from './SignElements';


const SignIn =  () => {
    
    const [loginInput, setLogin] = useState({
        email: '',
        password:'',
        error_list: [],
    });
    const history=useHistory();

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }
    const loginSubmit = (e) => {
        e.preventDefault();

        const data ={
            email:loginInput.email,
            password:loginInput.password,
        }
            axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/login`,data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Mantap!", res.data.message, "success");
                    if(res.data.role === 'admin')
                    {
                        history.push('/admin/dashboard');
                    }
                    else
                    {

                        history.push('/');
                    }
            }
            else if(res.data.status === 401)
            {
                swal("Peringatan",res.data.message,"warning");
            }
            else 
            {
                setLogin({ ...loginInput, error_list: res.data.validation_errors })
            }
        });
     });  
    }

    const loginGoogle = (e) => {
        e.preventDefault();
           api.getLoginGoogle().then(res => {
            if(res.status === 200)
            {
                swal("Mantap!", "success");
                history.push('/');
            }
           
        });
      
    }


    return (
        <Container>
            <FormWrap>
                <Icon to='/'> Ko qu Resto  </Icon>
                <FormContent>
                    <Form onSubmit={loginSubmit}>
                        <FormH1> Masuk ke ko akun </FormH1>
                       
                            
                        <FormLabel htmlFor='for'>Ko E-mail</FormLabel>
                        <FormInput type='email' name="email" placeholder="Kas masuk koi pu Email..." 
                         onChange={handleInput} value={loginInput.email}  />
                         <span>{loginInput.error_list.email}</span>

                        <FormLabel htmlFor='for'>Ko Password</FormLabel>
                        <FormInput type='password' name="password" placeholder="kas Masuk koi pu Password..."
                         onChange={handleInput} value={loginInput.password} />
                        <span>{loginInput.error_list.password}</span>

                        <FormButton > Masuk </FormButton>

                        <div className="social-media ">
                                 <Text >Masuk Dengan :</Text>
                            <div className="social-icons text-center">
                                <Link to="#" title='Github'>
                                <i> <SiGithub/> </i>
                                </Link>
                                <Link to="#" title='Facebook'>
                                <i> <FaFacebook/> </i>
                                </Link>
                                <Link onClick={loginGoogle} title='Gmail' target='_blank'>
                                <i > <SiGmail/> </i>
                                </Link>
                            </div>
                        </div>
                        <br/>
                        <TextA to='/register'>Dafat akun baru disini</TextA>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default SignIn
