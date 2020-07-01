import React, { Component } from 'react';

import '../../resources/shared.module.css';
import classes from './header.module.css';
import Sidebar from '../sidebar/sidebar';

export default class Header extends Component {
  state = {
    show: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scrollHandler);
    document.getElementById('container').addEventListener('click', () => {
      document.getElementById('sidebar').style.transform = "translateX(-200vw)";
    })
  }

  scrollHandler = () => {
    let show = window.scrollY > 0 ? true : false;
    this.setState({show});
  }

  sidebarHandler = () => {
    document.getElementById('sidebar').style.transform = "translateX(0)";
    console.log('sidebar')
  }

  render() {
    let backgroundColor = this.state.show ? '#000000e6': 'transparent';
    return (
      <>
      <div 
        className={classes.navbar} 
        style={{backgroundColor}}
        >
        <div className={classes.logo}>
          <div className={classes.logo_title}>The Venue</div>
          <div className={classes.logo_subtitle}>Musical Event</div>
        </div>
        <div 
          id="menu" 
          className={classes.menu}
          onClick={this.sidebarHandler}
          >
              <div></div>
              <div></div>
              <div></div>
            </div>
      </div>
      <Sidebar />
      </>
    )
  }
}
