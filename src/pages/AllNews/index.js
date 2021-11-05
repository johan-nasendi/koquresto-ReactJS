import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Card from './Card'


const AllNews = () => {
    return (
        <>
           <Sidebar/>
           <Navbar/>
            <Card/>

           <Footer/> 
        </>
    )
}

export default AllNews
