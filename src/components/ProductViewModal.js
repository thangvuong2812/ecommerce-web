import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import ProductView from './ProductView'
import productData from '../assets/fake-data/products'
import accessoryData from '../assets/fake-data/accessories'

import Button from './Button'

import { remove } from '../redux/product-modal/productModalSlice'

// import { useFadeModal } from '../customHook/useFadeModal'
const ProductViewModal = props => {
    const productSlug = useSelector((state) => state.productModal.value);
    
    const dispatch = useDispatch();
    // const product = productData.getProductBySlug('ao-thun-dinosaur-02');

    const [product, setProduct] = useState(undefined);
    useEffect(() => {
        const data = productData.getProductBySlug(productSlug);
        setProduct(data === undefined ? accessoryData.getAccessoryBySlug(productSlug) : data);
    }, [productSlug]);

    
    const filterRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                dispatch(remove());
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [filterRef, dispatch]);
    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content" ref={filterRef}>
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"
                        onClick={() => dispatch(remove())}
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductViewModal.propTypes = {

}

export default ProductViewModal
