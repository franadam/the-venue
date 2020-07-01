import React from 'react'
import Button from '../button/button'
import classes from './pricing.module.css';

export default function pricing() {
  return (
    <div id="pricing" className={classes.main}>
      <h1 className={classes.title}>Pricing</h1>
      <div className={classes.items}>
        <div className={classes.item}>
          <h3 className={classes.subtitle}>€ 100</h3>
          <p className={classes.type}>Balcony</p>
          <hr className={classes.separation}/>
          <p className={classes.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts</p>
          <Button text={'Purchase'} />
        </div>
        <div className={`${classes.item} ${classes.highlighted}`}>
          <div className={classes.badge}>Recommanded</div>
          <h3 className={classes.subtitle}>€ 150</h3>
          <p className={classes.type}>Medium</p>
          <hr className={classes.separation}/>
          <p className={classes.info}>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
          <Button text={'Purchase'} />
        </div>
        <div className={classes.item}>
          <h3 className={classes.subtitle}>€ 250</h3>
          <p className={classes.type}>Star</p>
          <hr className={classes.separation}/>
          <p className={classes.info}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Button text={'Purchase'} />
        </div>
      </div>
      </div>
  )
}
