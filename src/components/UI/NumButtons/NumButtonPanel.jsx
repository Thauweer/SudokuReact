import React, { Component } from 'react'
import NumButton from '../NumButton/NumButton'
import classes from './NumButtonPanel.module.css'

export default class NumButtonPanel extends Component {
  render() {
    const numbers = [ 1,2,3,4,5,6,7,8,9 ]
    return (
      <div className={classes.NumButtonPanel}>
        <div className={classes.wrapper}>
          {numbers.map( number =>
            <NumButton Number={number} key={number} dispatchGameField={this.props.dispatchGameField}/>
          )}
        </div>
      </div>
    )
  }
}
