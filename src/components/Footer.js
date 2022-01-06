import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/LogoVCT2.png'

const footerAboutLinks = [
    {
        title: 'Giới thiệu',
        path: '/about'
    },
    {
        title: 'Liên hệ',
        path: '/about'
    },
    {
        title: 'Tuyển dụng',
        path: '/about'
    },
    {
        title: 'Tin tức',
        path: '/about'
    },
    {
        title: 'Hệ thống cửa hàng',
        path: '/about'
    },
]

const customerLinks = [
    {
        title: 'Chính sách đổi trả',
        path: '/about'
    },
    {
        title: 'Chính sách bảo hành',
        path: '/about'
    },
    {
        title: 'Chính sách hoàn tiền',
        path: '/about'
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>09016182xx</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>09016182xx</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>09016182xx</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Thông tin shop VCT
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                customerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="Logo website"/>
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui mua sắm thời trang mới mỗi ngày cho hàng 
                            triệu người tiêu dùng Việt. 
                            Hãy cùng VCTShop hướng đến một cuộc sóng năng động tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
