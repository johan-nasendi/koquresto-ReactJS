import React from 'react'
import { Link } from 'react-router-dom';
import '../../assests/css/basket.css';

function Cart({item, remove}) {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "0";
    };

    // Calculate total price
    const totalPrice = item.reduce((accumulator, currentValue) => accumulator + currentValue.qty * currentValue.price, 0);
    const GST = totalPrice * 0.5;

    return (
        <div id="mySidenav" className="sidenav">
            <Link  to='#' className="closebtn" onClick={closeNav}>&times;</Link>
            <div className="container1" id="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-light">Cart</h3>
                        <hr/>
                        <div className="table-responsive" id="table">
                            <table className="table">
                                <thead id="table-header">
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody id="table-body">
                                {item.map((pizza) => (
                                    <tr key={pizza.id}>
                                        <td><strong>{pizza.name}</strong></td>
                                        <td>{pizza.qty}</td>
                                        <td>${pizza.price}</td>
                                        <td id="remove">
                                            <i onClick={() => remove(pizza)} className="far fa-trash-alt"/>
                                        </td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6 text-light">
                        <h3>Checkout</h3>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <p className="lead">Subtotal</p>
                            <p className="lead">${totalPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>GST</p>
                            <p>${GST}</p>
                        </div>
                        <hr/>
                        <button className="btn btn-success d-flex justify-content-between align-items-baseline"
                                id="checkout" type="button">Checkout<span
                            className="badge bg-success">${totalPrice + GST}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;