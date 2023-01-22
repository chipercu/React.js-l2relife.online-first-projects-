import React from 'react';
import css from './Info.module.css'
import nav_css from '../Nav.module.css'

const NavMenuInfo = () => {
    return(
            <div className={css.info} >
                <a className={nav_css.nav_txt} href='#'>Info</a>
            </div>
    )
}

export default NavMenuInfo;