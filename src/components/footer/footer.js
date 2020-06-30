import React from 'react'

import classes from './footer.module.css';

export default function footer() {
  return (
    <div className={classes.footer}>      
      <div className={classes.logo_title}>The Venue</div>
      <div className={classes.logo_subtitle}>The venue 2018.All rights reserved.</div>
    </div>
  )
}
