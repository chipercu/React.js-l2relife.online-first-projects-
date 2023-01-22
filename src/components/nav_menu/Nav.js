import React from 'react';

import css from './Nav.module.css'
import NavMenuHome from "./Home/NavMenuHome";
import NavMenuDownload from "./Download/NavMenuDownload";
import NavMenuInfo from "./Info/NavMenuInfo";
import NavMenuForum from "./Forum/NavMenuForum";
import NavMenuDonation from "./Donation/NavMenuDonation";

const Nav = () => {
    return(
        <nav className={css.nav}>
            <NavMenuHome/>
            <NavMenuDownload/>
            <NavMenuInfo/>
            <NavMenuForum/>
            <NavMenuDonation/>
        </nav>
    )
}

export default Nav;