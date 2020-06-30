import React, { Component } from 'react';

import '../../resources/shared.module.css';
import classes from './header.module.css';
import Sidebar from '../sidebar/sidebar';

export default class Header extends Component {

  sidebarHandler = () => {
    //e.defaultDe
    //const side = document.querySelector
    let x = document.getElementById('sidebar');
    x.style.display = x.style.display === "none" ? x.style.display = "flex" : x.style.display = "none";
    console.log('sidebar')
  }

  render() {
    return (
      <>
      <div className={classes.navbar} onClick={this.sidebarHandler}>
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
