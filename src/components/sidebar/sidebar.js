import React from 'react'

import classes from './sidebar.module.css';

export default function sidebar() {
  return (
    <div id="sidebar" className={classes.sidebar}>
      <ul className={classes.link_list}>
        <li className={classes.link} ><a href="#">Event</a></li>
        <li className={classes.link} ><a href="#">Venue</a></li>
        <li className={classes.link} ><a href="#">Highlight</a></li>
        <li className={classes.link} ><a href="#">Pricing</a></li>
        <li className={classes.link} ><a href="#">Location</a></li>
      </ul>
    </div>
  )
}
