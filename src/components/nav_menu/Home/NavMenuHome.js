import React from 'react';
import css from './Home.module.css'
import nav_css from '../Nav.module.css'

const NavMenuHome = () => {
    return(
            <div className={css.home}>
                <a className={nav_css.nav_txt} href='#'>Home</a>
            </div>
    )
}

export default NavMenuHome;