import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import {
   SidebarContainer, 
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   SidebarBtnWrap,
   SidebarRoute,
   Icon,
   CloseIcon
    } from './SidebarElements';
    const Sidebar = ({ isOpen, toggle }) => {

        const history =useHistory();
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
         var AuthButton = '';
         if(!localStorage.getItem('auth_token'))
         {
             AuthButton = (
                <SidebarBtnWrap>
                     <SidebarRoute to="/signin">Login</SidebarRoute>
                </SidebarBtnWrap>
             );
         }
         else
         {
            AuthButton = (
                <SidebarBtnWrap>
                     <SidebarRoute onClick={logoutSubmit}>Logout</SidebarRoute>
                </SidebarBtnWrap>
             );
         }
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='tentang' onClick={toggle}> Tentang </SidebarLink>
                    <SidebarLink to='menu' onClick={toggle}> Menu </SidebarLink>
                    <SidebarLink to='berita' onClick={toggle}> Beita </SidebarLink>
                    <SidebarLink to='kontak' onClick={toggle}>Kontak</SidebarLink>
                </SidebarMenu>
                
                     {AuthButton}
                     
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
