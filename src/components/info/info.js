import React from 'react'

import calendar from '../../resources/images/icons/calendar.png'
import location from '../../resources/images/icons/location.png'

import classes from './info.module.css';

export default function info() {
  return (
    <div id="information" className={classes.main}>
    <div className={classes.item}>
    <div className={classes.wrapper}>
      <div className={`${classes.icon} ${classes.calendar}`}>
        <img src={calendar} alt='calendar'/>
      </div>
      <div className={classes.title}>Event Date & Time</div>
      <hr className={classes.separation}/>
      <div className={classes.subtitle}>
        <p>24 November 2020</p>
        <p>20:30</p>
      </div>
      </div>
    </div>
    <div className={classes.item}>
    <div className={classes.wrapper}>
      <div className={`${classes.icon} ${classes.location}`}>
        <img src={location} alt='location' />
      </div>
      <div className={classes.title}>Location</div>
      <hr className={classes.separation}/>
      <div className={classes.subtitle}>
        <p>Sportpaleis Antwerpen</p>
        <p>Schijnpoortweg 119, 2170 Merksem</p>
      </div>
      </div>
    </div>
    </div>
  )
}
