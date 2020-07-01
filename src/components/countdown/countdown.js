import React, { Component } from 'react'

import classes from './countdown.module.css';

export default class Countdown extends Component {
  state = {
    deadline : new Date(2020, 11, 24, 20, 30),
    days: '0',
    hours: '0',
    minutes: '0',
    secondes: '0'
  }

  transitionHandler = () => {
    const countD = document.querySelector(`.${classes.main}`);
    countD.style.transform = "translateX(0px)";
  }
  getTimeUntil = () => {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({
        days: '0',
        hours: '0',
        minutes: '0',
        secondes: '0'});
    }
    else {
      const secondes = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor((time/(1000*60*60*24)));

      this.setState({
        days,
        hours,
        minutes,
        secondes
      })
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.transitionHandler();
      this.getTimeUntil();
    }, 1000);
  }

  componentDidUpdate = () => {
    setTimeout(() => {
      this.getTimeUntil();
    }, 1000);
  }

  render() {
    const {
      days,
      hours,
      minutes,
      secondes
    } = this.state;
    return (
      <div id="countdown" className={classes.main}>
              <div className={classes.title}>Event Start in</div>
              <div className={classes.times}>
                <div className={classes.item}>
                  <div className={classes.time}>{days}</div>
                  <div className={classes.tag}>Days</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.time}>{hours}</div>
                  <div className={classes.tag}>Hours</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.time}>{minutes}</div>
                  <div className={classes.tag}>Min</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.time}>{secondes}</div>
                  <div className={classes.tag}>Sec</div>
                </div>
              </div>
      </div>
    )
  }
}
