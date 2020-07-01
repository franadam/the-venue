import React, { Component } from 'react'

import Countdown from '../countdown/countdown';

import slide1 from '../../resources/images/slide_one.jpg'
import slide2 from '../../resources/images/slide_two.jpg'
import slide3 from '../../resources/images/slide_three.jpg'

import classes from './carousel.module.css';

const INTERVAL = 4000;

export default class carousel extends Component {

  state = {
    index: 0,
  }
  srcs = [slide1, slide2, slide3];

  componentDidMount() {
    this.timeout = setTimeout( () => {
      this.slideShowHandler()
    }, INTERVAL)
  }
  
  componentDidUpdate() {
    this.timeout = setTimeout( () => {
      this.slideShowHandler()
    }, INTERVAL)
  }

  componentWillUnmount () {
    clearInterval(this.timeout)
  }
  
  slideShowHandler = () => {
    const slides = document.querySelectorAll(`.${classes.slide}`)
    let index = this.state.index;
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    index = index >= 2 ? 0 : index + 1;
    slides[index].style.display = "block"; 

    this.setState({
      index
    });
  }


  render() {
    return (
      <>
      <div className={classes.main}>
      <div className={classes.slideshow}>
        <img className={classes.slide} src={this.srcs[this.state.index]} alt='ari'/>
        <img className={classes.slide} src={this.srcs[this.state.index]} alt='ari'/>
        <img className={classes.slide} src={this.srcs[this.state.index]} alt='ari'/>
      </div>
      <div className={classes.featured}><div>Ariana Grande</div></div>
      </div>
      <Countdown />
      </>
    )
  }
}
