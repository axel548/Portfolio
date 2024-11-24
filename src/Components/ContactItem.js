import React from 'react'
import PropTypes from 'prop-types';

function ContactItem({icon,  text1, text2, title}) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt=""/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div> 
    )
}

ContactItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ContactItem;
