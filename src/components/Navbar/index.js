import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,
        NavBtnLinkLog,NavBtn,NavBtnLinkLoging,NavLinksProfile,Bars,Shop,Logout,Login
        } from './NavbarElements';



const Navbar = ({toggle, basket}) => {
    const openNav = () => {
        document.getElementById("mySidenav").style.height = "350px";
    };
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >=80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
   
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

 

    var AuthButton = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButton = (
            <NavBtn>
                 <NavBtnLinkLoging to='/signin'> <Login/> </NavBtnLinkLoging>
             </NavBtn>
        );
    }
    else
    {
        AuthButton = (
            <NavMenu>
                    <NavItem>
                        <NavLinksProfile to='/admin/dashboard'> {user.name}  </NavLinksProfile>
                    </NavItem>
                 
                    <NavBtn>
                        <NavBtnLinkLog onClick={logoutSubmit}> <Logout/> </NavBtnLinkLog>
                    </NavBtn>
                </NavMenu>
        );
    }

    return (
      <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> <Bars/> Ko uq Resto</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to='tentang' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true' 
                        offset={-80} 
                        >Tentang</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='menu'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true' 
                        offset={-80}>Menu</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to='gallery'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true' 
                        offset={-80}> Gallery </NavLinks>
                    </NavItem> */}
    
                    <NavItem>
                        <NavLinks to='berita'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true' 
                        offset={-80}>Berita</NavLinks>
                    </NavItem>
                  
                    <NavItem>
                        <NavLinks to='kontak'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true' 
                        offset={-80}>Kontak</NavLinks>
                    </NavItem>  
                    <NavItem> 
                        <NavLinks onClick={openNav} >
                            <Shop/> {basket}
                        </NavLinks> 
                    </NavItem>
                    {AuthButton}
                </NavMenu>
                       
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar;








