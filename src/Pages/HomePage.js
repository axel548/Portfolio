import { faGithub,faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am{' '}
                    <span> Axel Lopez</span>
                </h1>
                <p className="h-sub-text">
                I'm a Backend Developer with knowledge in AWS and Digital Ocean. I have over 1 year of experience as a developer. I enjoy collaborating with new clients, as each new project brings unique challenges and learning opportunities.
                    <br />
                    {/* <b>everything is possible</b> */}
                </p>
                <div className="icons">
                    <a href="https://github.com/axel548" target="_blank"  rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/axel-lopez548/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
                    </a>
                </div>
                
            </header>
        </div>
    );
}

export default HomePage;
