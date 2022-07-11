import React from 'react'
import classes from './NewGameButton.module.css'

export default function NewGameButton(props) {
  return (
    <button className={classes.OptionButton} onClick={()=>props.onclick(props.gameSize)}>
        {props.name}
    </button>
  )
}
