import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import numberWithCommas from '../ultils/numberWithCommas';
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemSlice';
// import PopConfirm from 'react-popconfirm'

const CartItem = props => {

    const dispatch = useDispatch();

    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.quantity);

    const updateQuantity = (option) => {
        if (option === '+') {
            dispatch(updateItem({ ...item, quantity: quantity + 1 }))
        } else {
            dispatch(updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }))
        }
    }

    const delItem = () => {
        // eslint-disable-next-line no-restricted-globals
        const isConfirm = confirm('Are you sure you want to delete?');
        if (isConfirm) {
            dispatch(removeItem(item));
        }
    }

    useEffect(() => {
        setQuantity(props.item.quantity);
        setItem(props.item);
    }, [props.item])
    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={item.product.image01} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${item.slug}`}>
                        {
                            `${item.product.title} ${item.color ? item.color : ''} ${item.size ? item.size : ''}`
                        }
                    </Link>
                </div>
                <div className="cart__item__info__price">
                    {numberWithCommas(Number(item.product.price))}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__info__del" onClick={() => delItem()}>
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
