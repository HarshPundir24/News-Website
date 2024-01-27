import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ()=>{
        return(
            <div>
               <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h5 className='text-white'>Yesterday_News</h5>
                   <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
}

export default Navbar;