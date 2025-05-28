import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const menu = document.getElementsByClassName('nav-menu');
    // menu.addEventListener('click', function () {
    //     document.getElementById('nav').style.display = 'block';
    // });
    // if (menu.addEventListener('click')) {
    //     document.getElementById('nav').style.display = 'block';
    // }
    return (
        <div className="uni">
            <header>
                <div class="logo">
                    <h1>LearnAI</h1>
                </div>
                <div className="nav-menu">
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                </div>
                <nav id="nav">
                    <ul>
                        <li className="navbar-item">
                            <Link to="/learn-test/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//     const [isNavVisible, setIsNavVisible] = useState(false);

//     const toggleNav = () => {
//         setIsNavVisible(!isNavVisible);
//     };

//     return (
//         <div className="uni">
//             <header>
//                 <div className="logo">
//                     <h1>LearnAI</h1>
//                 </div>
//                 <div className="nav-menu" onClick={toggleNav}>
//                     <div className="menu"></div>
//                     <div className="menu"></div>
//                     <div className="menu"></div>
//                 </div>
//                 {isNavVisible && (
//                     <nav id="nav">
//                         <ul>
//                             <li className="navbar-item">
//                                 <Link to="/LearnAI" className="nav-link">Home</Link>
//                             </li>
//                             <li className="navbar-item">
//                                 <Link to="/courses" className="nav-link">Courses</Link>
//                             </li>
//                             <li className="navbar-item">
//                                 <Link to="/about" className="nav-link">About</Link>
//                             </li>
//                             <li className="navbar-item">
//                                 <Link to="/login">Login</Link>
//                             </li>
//                             <li className="navbar-item">
//                                 <Link to="/register">Register</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 )}
//             </header>
//         </div>
//     );
// }

// export default Navbar;
