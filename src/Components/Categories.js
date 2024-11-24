import React from 'react'
import PropTypes from 'prop-types';

function Categories({filter, categories}) {
    return (
        <div className="buttons">
          {
              categories.map((cat, i)=>{
                  return <button type="button" className="btn-port" key={i} onClick={() => filter(cat)} >{cat}</button>
              })
          }  
        </div>
    )
}

Categories.propTypes = {
    filter: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
}

export default Categories;
 