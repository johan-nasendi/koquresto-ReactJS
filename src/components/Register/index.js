import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    TextA
} from './RegisterElements';

const  Register = () => {
   
     const [registerInput, setResgister] = useState({
        name:'',
        email:'',
        username:'',
        password:'',
        error_list: [],
     });

     const history=useHistory();

     const handleInput = (e) => {
        e.persist();
         setResgister({...registerInput, [e.target.name]: e.target.value});
     }

     const registerSubmit = (e) => {
         e.preventDefault();
            
         const data = {
             name: registerInput.name,
             email: registerInput.email,
             username: registerInput.username,
             password: registerInput.password,
         }

         axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/register`, data).then(res => {
                 
            if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Mantap!", res.data.message, "success");
                    history.push('/');
                }
                else
                {
                    setResgister({ ...registerInput, error_list: res.data.validation_errors })
                }

            });
         });
     }
 
    return (
        
        <Container>
            <FormWrap>
                <Icon to='/'> Ko qu Resto </Icon>
                <FormContent>
                    <Form  onSubmit={registerSubmit}>
                        <FormH1> Daftar Ko Pu Akun </FormH1>
                        <FormLabel htmlFor='for'>Full Name</FormLabel>
                        <FormInput type='text'  name="name" placeholder="Enter..."
                            onChange={handleInput} value={registerInput.name} />
                            {/* <Text> {registerInput.error_list.name} </Text> */}

                        <FormLabel htmlFor='for'>Username</FormLabel>
                        <FormInput type='text'  name="username" placeholder="Enter..."
                            onChange={handleInput} value={registerInput.username}/>
                            {/* <Text> {registerInput.error_list.username} </Text> */}

                        <FormLabel htmlFor='for'>E-mail</FormLabel>
                        <FormInput type='email' name="email" placeholder="Enter..." 
                           onChange={handleInput} value={registerInput.email} />
                           {/* <Text> {registerInput.error_list.email} </Text> */}

                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" name="password" placeholder="Enter..."
                          onChange={handleInput} value={registerInput.password}/>
                          {/* <Text> {registerInput.error_list.password} </Text> */}

        
                        <FormButton type='submit'> Daftar </FormButton>
                        <Text>Sudah pu akun <TextA to='/signin'>Klik</TextA> </Text>
                        
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        );
};

export default Register;
