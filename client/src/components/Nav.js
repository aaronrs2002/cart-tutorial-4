import React, { useState, useEffect } from "react";

const Nav = (props) => {
    let [mobileNav, setMobileNav] = useState(false);


    const toggleMobileNav = (whatSection) => {
        props.setActiveModule((activeModule) => whatSection);
        localStorage.setItem("activeModule", whatSection);

        if (window.innerWidth <= 768) {
            if (mobileNav === false) {
                setMobileNav((mobileNav) => true);
            } else {
                setMobileNav((mobileNav) => false);
            }
        }
    }

    return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">WebApp</a>
        <button className="navbar-toggler" onClick={() => toggleMobileNav()}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={mobileNav === false ? "collapse navbar-collapse" : "collapse navbar-collapse show animated fadeIn"}>
            <ul className="navbar-nav mr-auto">
                <li className={props.activeModule === "cart" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#" onClick={() => toggleMobileNav("cart")}>Cart</a>
                </li>
                <li className={props.activeModule === "log" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#" onClick={() => toggleMobileNav("log")}>Transaction Log</a>
                </li>
                <li className={props.activeModule === "cms" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#" onClick={() => toggleMobileNav("cms")}>Inventory</a>
                </li>
            </ul>

        </div>
    </nav>)

}

export default Nav;