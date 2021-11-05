import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Menu from './menu';
import Item from './item';
import Cart from './cart';
import '../../assests/css/style.css'
import {CartProvider} from 'react-use-cart'

const Fullmenu = ({toggle}) => {
    // Basket
    const [basket, setBasket] = useState([]);

        // Add to basket
        const addItem = (menu) => {
            // Check if the item exist or not
            const exist = basket.find((item) => item.id === menu.id);
            if (exist) {
                setBasket(basket.map(item => item.id === menu.id ? {...exist, qty: exist.qty + 1} : item));
            } else {
                setBasket([...basket, {...menu, qty: 1}]);
            }
        };

        
    // Remove from basket
    const removeItem = (menu) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === menu.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((item) => item.id !== menu.id));
        } else {
            setBasket(basket.map(item => item.id === menu.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    return (
        <>
        <Sidebar onClick={toggle}/>
        <CartProvider>
           <Navbar basket={basket.length}/>
            <Menu  desc="Menu Makanan" data={Item} addItem={addItem}/>
            <Menu  desc="Menu Minuman" data={Item} addItem={addItem}/>
            <Cart item={basket} remove={removeItem}/>
        </CartProvider>
         <Footer />
        </>
    )
}

export default Fullmenu
