import React, { useState } from 'react';
import avatar from '../img/personales/image_1.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <div className="NavBar">

            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>
                <ul className="nav-items">
                    {/* <li className="nav-item">
                        <label className="switch">
                            <input type="checkbox" checked={checked} onChange={handleChange} />
                            <span className="slider round"></span>
                        </label>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    {/*<li className="nav-item">
                <NavLink to="/certifieds" exact activeClassName="active">
                    Certifieds
                </NavLink>
            </li>*/}
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2024
                    </p>
                </footer>
            </nav>

        </div>
    )
}

export default NavBar;