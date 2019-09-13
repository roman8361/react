import React from 'react';
import classes from './navbar.module.css'

const Navbar = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      Profile
    </div>
    <div className={classes.item}>
      Message
    </div>
    <div className={classes.item}>
      News
    </div>
    <div className={classes.item}>
      Music
    </div>
    <div>

    </div>
  </nav>
}

export default Navbar