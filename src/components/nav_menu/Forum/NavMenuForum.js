import React from 'react';
import css from './Forum.module.css'
import nav_css from '../Nav.module.css'

const NavMenuForum = () => {
    return(
            <div className={nav_css.myButton}>
                <a className={nav_css.nav_txt} href='#'>Forum</a>
            </div>
    )
}

export default NavMenuForum;