import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Stores</NavigationItem>
        <NavigationItem link="/">Login</NavigationItem>
    </ul>
);

export default navigationItems;