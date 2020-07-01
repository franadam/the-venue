import React from 'react'
import {scroller} from 'react-scroll'
import classes from './sidebar.module.css';

export default function sidebar() {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    document.getElementById('sidebar').style.display = "none";
  }

  return (
    <div id="sidebar" className={classes.sidebar}>
      <ul className={classes.link_list}>
        <li className={classes.link} onClick={() => scrollToElement('countdown')}>Event</li>
        <li className={classes.link} onClick={() => scrollToElement('information')}>Venue</li>
        <li className={classes.link} onClick={() => scrollToElement('highlight')}>Highlight</li>
        <li className={classes.link} onClick={() => scrollToElement('pricing')}>Pricing</li>
        <li className={classes.link} onClick={() => scrollToElement('location')}>Location</li>
      </ul>
    </div>
  )
}
