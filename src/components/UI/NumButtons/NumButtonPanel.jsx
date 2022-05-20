import React from 'react'
import NumButton from '../NumButton/NumButton'
import classes from './NumButtonPanel.module.css'

export default function NumButtonPanel(props) {
  const numbers = new Array(props.gameSize*props.gameSize).fill().map((el,i)=>{return i+1})
  return (
    <div className={classes.NumButtonPanel}>
        <div className={classes.wrapper}>
          {numbers.map( number =>
            <NumButton 
            Number={number} 
            key={number} 
            sudoku={props.sudoku}
            position={props.position}
            incCounterSteps={props.incCounterSteps}
            />
          )}
        </div>
      </div>
  )
}

