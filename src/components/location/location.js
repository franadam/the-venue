import React from 'react'
import classes from './location.module.css'

export default function location() {
  return (
    <div id='location' className={classes.main}>
      <iframe 
        title='location'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9993.384080493539!2d4.4410291!3d51.231122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79356f92580ca5f!2sPalais%20des%20sports%20d&#39;Anvers!5e0!3m2!1sfr!2sbe!4v1593610004889!5m2!1sfr!2sbe" 
        width="600" 
        height="450" 
        frameBorder="0" 
        allowFullScreen
        ></iframe>
    </div>
  )
}
