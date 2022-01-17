import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title = 'VCT - ' + props.title;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {props.children}
        </>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
