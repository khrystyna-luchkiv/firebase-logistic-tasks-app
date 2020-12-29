import React from 'react';

import srcLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={srcLogo} alt="logo" />
    </div>
);

export default logo;