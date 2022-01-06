import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const typeCards = [
    {
        type: 'success',
        title: 'Thành công!',
        icon: 'bxs-check-circle'
    },
    {
        type: 'warning',
        title: 'Cảnh báo!',
        icon: 'bxs-error-circle'
    },
    {
        type: 'error',
        title: 'Thất bại!'
    }
]
const NotifyCard = props => {
    const ref = useRef();
    useEffect(() => {
        ref.current.style.color = 'red';
    }, [ref])
    return (
        <div className="notify">
            <div className="notify-card">
                <div className="notify-card__icon" ref={ref}>
                    <i className='bx bxs-check-circle'></i>
                </div>
                <div className="notify-card__content">
                    <div className="notify-card__content__title">
                        Thành công!
                    </div>
                    <div className="notify-card__content__message">
                        <p>sssssssssssssss</p>
                    </div>
                </div>
                <div className="notify-card__close">
                    <i>&times;</i>
                </div>
            </div>
        </div>
    )
}

NotifyCard.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    icon: PropTypes.string
}

export default NotifyCard
