import React from 'react'
import PropTypes from 'prop-types';

function ServicesSection({ image, title, text }) {
    return (
        <div className="ServicesSection" style={{ width: 300 }} >
            <div className="service">
                <div className="service-content">
                    <img src={image} alt="" />
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

ServicesSection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ServicesSection;
