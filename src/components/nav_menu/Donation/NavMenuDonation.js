import React from 'react';
import c from './Donation.module.css'
import nav_css from '../Nav.module.css'

const NavMenuDonation = () => {
    return(
            <div  className={nav_css.myButton}>
                <a  className={nav_css.nav_txt} href='#'>Donation</a>
            </div>
    )
}

export default NavMenuDonation;