import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { productData,productDataTrie } from '../components/Menu/data';
import Feature from '../components/Fuature';
import Cart from './Allmenu/cart';
import News from '../components/News';
import Contact from '../components/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

   const [basket, setBasket] = useState([]);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
       // Remove from basket
       const removeItem = (pizza) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === pizza.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((item) => item.id !== pizza.id));
        } else {
            setBasket(basket.map(item => item.id === pizza.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    
    return (
        <>          
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar  toggle={toggle} />
                <Cart item={basket} remove={removeItem}/>
                <HeroSection />
                <InfoSection {...homeObjOne} />
                <Menu heading='Koi menu favorit' data={productData} />
                <Feature/>
                <Menu heading='Minuman untuk Koi' data={productDataTrie} />
                <News/>
            
                {/* <InfoSection {...homeObjTree} /> */}
                <Contact/>
                <Footer />
            

        </>
    
    );
};

export default Home;
