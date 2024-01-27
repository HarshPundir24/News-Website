import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ()=>{
        return(
            <div>
               <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <h5>Yesterday_News</h5>
                   <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
}

export default Navbar;