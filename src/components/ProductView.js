import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Button from './Button';
import numberWithCommas from '../ultils/numberWithCommas'
import { withRouter } from 'react-router';
import { addItem } from '../redux/shopping-cart/cartItemSlice'
import { useDispatch } from 'react-redux'
import { NotificationManager } from 'react-notifications'
import categoryAccess from '../assets/fake-data/category-access'
import { remove } from '../redux/product-modal/productModalSlice';
const ProductView = props => {
    let product = props.product;

    if (product === undefined) product = {
        price: 0,
        title: '',
        colors: [],
        size: [],
    };
    const [previewImg, setPreviewImg] = useState(product.image01);

    const [desExpand, setDesExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const [quantity, setQuantity] = useState(1);

    const [isShowBtn, setIsShowBtn] = useState(true);

    const dispatch = useDispatch();

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    }
    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product])

    const check = () => {
        const check = categoryAccess.find(e => e.categorySlug === product.categorySlug)
        if (color === undefined && check === undefined) {
            NotificationManager.info('Vui lòng chọn màu sắc!', 'Thông báo!', 2000);
            return false;
        }

        if (size === undefined && check === undefined) {
            NotificationManager.info('Vui lòng chọn kích cỡ!', 'Thông báo!', 2000);
            return false;
        }
        return true;
    }
    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }));
            NotificationManager.success('Sản phẩm đã được thêm vào giỏ hàng!', 'Thành công!', 2000);
        }
    }

    const goToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }));
            dispatch(remove());
            props.history.push('/cart');
        }
    }
    const desRef = useRef()
    const titleRef = useRef()
    const contentRef = useRef()
    const mobileDesRef = useRef()
    const mobileTitleRef = useRef()
    const mobileContentRef = useRef()
    useEffect(() => {
        const heightDes = desRef.current.clientHeight;
        if (titleRef.current.clientHeight + contentRef.current.clientHeight < heightDes) {
            desRef.current.style.height = 'max-content';
            setIsShowBtn(false);
        }
       
    }, [desRef, titleRef, contentRef])

    useEffect(() => {
        const heightMobileDes = mobileDesRef.current.clientHeight;
        if (mobileDesRef.current) {
            if(mobileTitleRef.current.clientHeight + mobileContentRef.current.clientHeight < heightMobileDes) {
                mobileDesRef.current.style.height = 'max-content';
                setIsShowBtn(false)
            }
        }
    }, [mobileDesRef,mobileTitleRef,mobileContentRef])
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} />
                </div>
                <div className={`product-description ${desExpand ? 'expand' : ''}`} ref={desRef}>
                    <div className="product-description__title" ref={titleRef}>
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }} ref={contentRef}></div>
                    {
                        isShowBtn === true ? <div className="product-description__toggle">
                            <Button size="sm" onClick={() => setDesExpand(!desExpand)}>
                                {
                                    desExpand ? 'Thu gọn' : 'Xem thêm'
                                }
                            </Button>
                        </div> : null
                    }
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">
                    {
                        product.title
                    }
                </h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        {
                            product.colors ? 'Màu sắc' : ''
                        }
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors ? product.colors.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            )) : null
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        {
                            product.size ? 'Kích cỡ' : ''
                        }
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size ? product.size.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="product__info__item__list__item__size">
                                        {item}
                                    </span>
                                </div>
                            )) : null
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button size="sm" onClick={() => addToCart()}>Thêm vào giỏ hàng</Button>
                    <Button size="sm" onClick={() => goToCart()}>Mua ngay</Button>
                </div>
            </div>
            <div className={`product-description mobile ${desExpand ? 'expand' : ''}`} ref={mobileDesRef}>
                <div className="product-description__title" ref={mobileTitleRef}>
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }} ref={mobileContentRef}></div>
                {
                    isShowBtn === true ? <div className="product-description__toggle">
                        <Button size="sm" onClick={() => setDesExpand(!desExpand)}>
                            {
                                desExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div> : null
                }
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)
