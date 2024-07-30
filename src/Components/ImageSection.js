import React from 'react';
// import about from '../img/personales/image_2.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img src={about} alt="Foto" width={200} />
            </div> */}
            <div className="about-info">
                <h4>I am<span> Axel Lopez</span></h4>
                {/* <p className="about-text">I am a guy who is passionate about learning, </p>
                <p className="about-text">I like to learn new things every day, I am motivated to work as a backend developer and a bit of frontend.</p> */}
                <div className="about-details">
                    <div className="left-sectiofn">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Country</p>
                        <p>Languages</p>
                        {/* <p>Countries</p> */}
                    </div>
                    <div className="right-section">
                        <p>: Axel Lopez</p>
                        <p>: 22</p>
                        <p>: Guatemala</p>
                        <p>: Spanish, English</p>
                        {/* <p>: Guatemala</p> */}
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1ngI5DoVyOAMFN61VXXc-fUliIju8VOfz/view?usp=sharing" target="_blank" rel="noreferrer" ><button className="btn">Download CV</button></a>
            </div>
        </div>
    )
}

export default ImageSection;
