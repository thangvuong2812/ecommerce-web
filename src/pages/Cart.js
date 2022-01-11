import React, { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet'

import numberWithCommas from '../ultils/numberWithCommas'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import getCartItemsDetail from '../assets/fake-data/getCartItem'
import noItemImg from '../assets/images/noitem.gif'

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems.value);


    const [cartProducts, setCartProducts] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);

    const [totalProduct, setTotalProduct] = useState(0);
    const listRef = useRef();
    
    useEffect(() => {
        const x = getCartItemsDetail(cartItems);
        setCartProducts(x);
        setTotalProduct(cartItems.reduce((totalProduct, item) => totalProduct + Number(item.quantity), 0));
        setTotalPrice(cartItems.reduce((totalPrice, item) => totalPrice + (Number(item.price) * Number(item.quantity)), 0));
    }, [cartItems])
   
    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có <span>{totalProduct}</span> sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền</span>
                            <span>{`${numberWithCommas(totalPrice)} VNĐ`}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block">Đặt hàng</Button>
                        <Link to="/ecommerce-web/catalog">
                            <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list" ref={listRef}>
                {
                    cartProducts.length > 0 ? cartProducts.map((item, index) => (
                        <CartItem item={item} key={index}/>
                    )) : <img src={noItemImg} alt='No Item'/>
                }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
