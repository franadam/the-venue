import React from 'react'

import Button from '../../button/button'
import classes from './discount.module.css';

export default function discount() {
  return (
    <div className={classes.main}>
      <div className={classes.amount}>
        <h3>30 %</h3>
        <p>OFF</p>
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>Purchase tickets before 20th August</h3>
        <p className={classes.condition}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <Button text={'Purchase tickets'} />
      </div>
    </div>
  )
}
