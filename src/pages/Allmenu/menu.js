import React from 'react';
import data from './data';
import Item from "./item";


const Menu = ({name, desc, addItem}) => {
    return (
        <section className="features-boxed">
            <div className="container1">
                <div className="intro1">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    {data.map((menu) => (
                        <Item key={menu.id} item={menu} addItem={addItem}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;