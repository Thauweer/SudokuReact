import React from 'react'
import classes from './SudokuButton.module.css'

export default function SudokuButton(props) {
  return (
    <button className={classes.OptionButton} onClick={props.onclick}>
        {props.name}
    </button>
  )
}
