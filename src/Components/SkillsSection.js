import React from 'react';
import PropTypes from 'prop-types';

function SkillsSection({image, skill, progress, width, w='50px'}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
				<div className="skill-image">
					<img src={image} alt={`${skill} bar`} style={{width: w}}  />
				</div>

				<div className="skill-title">
          			<h5 className="title">{skill}</h5>
				</div>

                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width: width}}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

SkillsSection.propTypes = {
    image: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    w: PropTypes.string,
}

export default SkillsSection;
  
