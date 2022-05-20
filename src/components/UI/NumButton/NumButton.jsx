import React from 'react'
import classes from './NumButton.module.css'



export default function NumButton(props) {
  return (
    <button 
      className={classes.NumButton} 
      onClick={() =>{ 
        props.sudoku.changeCell(props.position, props.Number)
        props.incCounterSteps()
      }}>
        {props.Number}
      </button>
  )
}
