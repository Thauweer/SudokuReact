import React from 'react'
import classes from './SudokuButtons.module.css'
import SudokuButton from '../SudokuButton/SudokuButton'
import DropDownSize from '../DropDownSize/DropDownSize'

export default function SudokuButtons(props) {
  return (
    <div className={classes.SudokuButtons}>
      <SudokuButton name='Новая игра'
        onclick={props.newGame}
      />
      <DropDownSize setGamesize={props.setGamesize} />
    </div>
  )
}
