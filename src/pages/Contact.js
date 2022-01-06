import React from 'react'
import PropTypes from 'prop-types'
import Helmet from '../components/Helmet'
import Button from '../components/Button'

function Contact(props) {
    const handleClick = (e) => {
        e.preventDefault();
    }
    
    return (
        <Helmet title="Liên hệ">
            <div className="contact">
                <div className="contact__content">
                    <div className="contact__content__title">
                        Liên hệ với chúng tôi!
                    </div>
                    <div className="contact__content__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.564916421963!2d106.82079625257234!3d10.730415050122163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175237cfc67c491%3A0x2f1ef44f7724294b!2zxJDhuqFpIEzDvSBYxINuZyBE4bqndSBQaMO6IMSQw7RuZw!5e0!3m2!1svi!2s!4v1641114863421!5m2!1svi!2s" style={{ border: 0 }} allowFullScreen loading="lazy" />
                    </div>
                </div>
                <div className="contact__form">

                    <div className="contact__form__main">
                        <div className="contact__form__main__content">
                            <div className="contact__form__title">
                                Chúng tôi có thể giúp gì cho bạn
                            </div>
                            <form onSubmit={(e) => handleClick(e)}>
                                <input className="contact__form__input" placeholder="Name" />
                                <input className="contact__form__input" placeholder="Email" />
                                <input className="contact__form__input" placeholder="Phone" />
                                <textarea className="contact__form__input" placeholder="Message" />
                                <Button size="sm" icon="bx bx-send" animate={true} >Gửi</Button>
                            </form>
                        </div>
                    </div>
                    <div className="contact__form__sub">
                        <div className="contact__form__sub__content">
                            <div className="contact__form__title">
                                Thông tin liên lạc
                            </div>
                            <div>
                                <div className="contact__form__sub__icon"><i className='bx bx-location-plus'></i>Địa chỉ: Hùng Vương, Phú Đông, Nhơn Trạch, Đồng Nai, Việt Nam</div>
                                <div className="contact__form__sub__icon">
                                    <i className="bx bx-mail-send"></i> <p> Email: <a href="mailto:someone@example.com"> thangvuong2812@gmail.com</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

Contact.propTypes = {

}

export default Contact
