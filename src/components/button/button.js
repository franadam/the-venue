import React from 'react'

import ticket from '../../resources/images/icons/ticket.png';

import classes from './button.module.css';

export default function button(props) {
  return (
    <button className={classes.main} type="button">
      <img className={classes.icon} src={ticket} alt="ticket"/>
      {props.text}
    </button>
  )
}
