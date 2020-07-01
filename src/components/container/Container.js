import React, { Component } from 'react'
import {Element} from 'react-scroll';

import Carousel from '../carousel/carousel';
import Info from '../info/info';
import Highlight from '../highlight/highlight';
import Pricing from '../pricing/pricing';
import Location from '../location/location';

import classes from './container.module.css';

export default class Container extends Component {
  render() {
    return (
      <div id='container' className={classes.main}>
        <Carousel />
        <Element name='information'>
          <Info />
        </Element>
        <Element name='highlight'>
          <Highlight />
        </Element>
        <Element name='pricing'>
          <Pricing />
        </Element>
        <Element name='location'>
          <Location />
        </Element>        
      </div>
    )
  }
}
