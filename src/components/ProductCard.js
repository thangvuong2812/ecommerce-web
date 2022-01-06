import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import numberWithCommas from '../ultils/numberWithCommas'
import { useDispatch } from 'react-redux'
import { set } from '../redux/product-modal/productModalSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import { checkSlug } from '../assets/fake-data/getCartItem'

const ProductCard = props => {
    const [isAccessories, setIsAccessories] = useState(true)
    useEffect(() => {
        if(checkSlug(props.slug)) {
            setIsAccessories(false)
        }
    },[props.slug])
    const dispatch = useDispatch()
    return (
        <div className="product-card">
            <Link to={`/ecommerce-web/catalog/${props.slug}`}>
                <div className={`product-card__image ${!isAccessories ? 'untransition': ''}`}>
                    <img src={props.img01} alt=""/>
                    <img src={props.img02} alt=""/>
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {
                        numberWithCommas(props.price)
                    }
                    <span className="product-card__price__old">
                        <del>{
                            numberWithCommas(390000)
                        }</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => dispatch(set(props.slug))}
                >
                    Chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard
