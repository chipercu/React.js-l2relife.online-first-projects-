import React from 'react';
import css from './Home.module.css'
import nav_css from '../Nav.module.css'



const MainDiv = (props) => {
    return (
        <div id="main" className={css.home}>
            <InnerDiv/>
        </div>
    );
}
const InnerDiv = (props) => {
    return <div className={nav_css.nav_txt}>Home</div>
}


const NavMenuHome = () => {
    return <MainDiv/>
}

export default NavMenuHome;