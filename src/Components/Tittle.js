import React from 'react';
import PropTypes from 'prop-types';

function Tittle({title, span}) {
    return (
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )
}

Tittle.propTypes = {
    title: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
}

export default Tittle;
