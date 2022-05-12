import React, { Component } from 'react'
import classes from './NumButton.module.css'

export default class NumButton extends Component {
  render() {
    return (
      <button 
      className={classes.NumButton} 
      onClick={() =>{ this.props.dispatchGameField(this.props.Number)}
      }
      >
        <p className={classes.InnerText}>{this.props.Number}</p>
      </button>
    )
  }
}
