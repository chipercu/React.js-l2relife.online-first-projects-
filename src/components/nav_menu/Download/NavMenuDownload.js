import React from 'react';
import css from './Download.module.css'
import nav_css from '../Nav.module.css'

const NavMenuDownload = () => {
    return(
            <div className={nav_css.myButton}>
                <a className={nav_css.nav_txt} href='#'>Download</a>
            </div>
    )
}

export default NavMenuDownload;