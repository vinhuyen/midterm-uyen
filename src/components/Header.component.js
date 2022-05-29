import React from 'react';
import {Link, Outlet} from "react-router-dom";

export default function Header() {
    return(
        <>
            <div className="layout__header">
                <div className="header__top">
                    <ul className="header--top--left">
                        <li className="header__ele"><a href="">ePaper</a></li>
                        <li className="header__ele"><a href="">Subscribe</a></li>
                        <li className="header__ele"><a href="">Newsletters</a></li>
                    </ul>
                    <div className="header--top--center">
                        <img className="logo" src="https://cdn.sanity.io/images/cxgd3urn/production/2b3466774dc5776b98c0047e115924687dff5e5e-366x80.svg" alt=""/>
                    </div>
                    <ul className="header--top--right">
                        <li className="header__ele"><a href="">Search</a></li>
                        <li className="header__ele"><a href="">Profile</a></li>
                    </ul>
                </div>
                <ul className="header--bottom">
                    <li className="header--bottom__ele"><a href="">Viet Nam</a></li>
                    <li className="header--bottom__ele"><a href="">The World</a></li>
                    <li className="header--bottom__ele"><a href="">abc</a></li>
                    <li className="header--bottom__ele"><a href="">abc</a></li>
                    <li className="header--bottom__ele"><a href="">abc</a></li>
                    <li className="header--bottom__ele"><a href="">acc</a></li>
                    <li className="header--bottom__ele"><Link to="Admin">Admin</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>

    )
}

