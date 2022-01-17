import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/LogoVCT2.png'

const mainNav = [
    {
        display: "Trang Chủ",
        path: "/ecommerce-web/"
    },
    {
        display: "Sản phẩm",
        path: "/ecommerce-web/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/ecommerce-web/accessories"
    },
    {
        display: "Liên hệ",
        path: "/ecommerce-web/contact"
    }
]

const Header = () => {
    const { pathname } = useLocation();
    const cartItems = useSelector(state => state.cartItems.value);
    const [totalProduct, setTotalProduct] = useState(0);

    const activeNav = mainNav.findIndex(e => e.path === pathname);

    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    useEffect(() => {
        setTotalProduct(cartItems.reduce((totalProduct, item) => totalProduct + Number(item.quantity), 0));
    }, [cartItems])
    const menuLeft = useRef();
    const menuToggle = () => menuLeft.current.classList.toggle("active");
    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/ecommerce-web">
                        <img src={logo} alt="Main logo website" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/ecommerce-web/cart">
                                <i className="bx bx-shopping-bag"></i>
                                {totalProduct === 0 ? null : <span className="bg-red ">{totalProduct}</span>}
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/ecommerce-web/login">
                                <i className="bx bx-user"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
