import React, { Component } from 'react'
import Carousel from '../carousel/carousel';

import classes from './container.module.css';

export default class Container extends Component {
  render() {
    return (
      <div className={classes.main}>
        <Carousel />
      </div>
    )
  }
}
