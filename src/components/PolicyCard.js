import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'
import 'aos/dist/aos.css'
const PolicyCard = props => {
    useEffect(() => {
        AOS.init({duration: 2000})
    })
    return (
        <div data-aos="fade-up" data-aos-delay={props.delay}>
            <div className="policy-card">
                <div className="policy-card__icon">
                    <i className={props.icon}></i>
                </div>
                <div className="policy-card__info">
                    <div className="policy-card__info__name">
                        {props.name}
                    </div>
                    <div className="policy-card__info__description">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default PolicyCard
