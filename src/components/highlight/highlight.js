import React, { Component } from 'react'

import Description from './description/description';
import Discount from './discount/discount';

import classes from './highlight.module.css';

export default class Highlight extends Component {
  render() {
    return (
      <div id="highlight" className={classes.main}>
        <h1 className={classes.title}>Highlight</h1>
        <Description />
        <Discount />
      </div>
    )
  }
}
