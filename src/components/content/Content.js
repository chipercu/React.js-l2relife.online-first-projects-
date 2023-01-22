import React from 'react';
import css from './Content.module.css'


const Content = (props) => {
    return(
        <div className={css.content}>
            <div>
                <img src='https://wallpaperaccess.com/full/2018779.jpg'/>
            </div>
            <div>
                <img src='https://wallpaperaccess.com/full/2018779.jpg'/>
            </div>
            <div>
                <img src='https://wallpaperaccess.com/full/2018779.jpg'/>
            </div>
            <div>
                {props.text}, how are you?
            </div>
        </div>
    )
}

export default Content;