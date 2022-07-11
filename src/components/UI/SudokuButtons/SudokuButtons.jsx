import React from 'react'
import classes from './SudokuButtons.module.css'
import NewGameButton from '../SudokuButton/NewGameButton'
import DropDown from '../DropDown/DropDown'

export default function SudokuButtons(props) {
  return (
    <div className={classes.SudokuButtons}>
      <NewGameButton name='Новая игра'
        onclick={props.newGame}
        gameSize={props.gameSize}
      />
      <DropDown setGamesize={props.setGamesize} title={'Размер поля'} items={[
        ['размер 3х3', () => props.setGamesize(3)],
        ['размер 4х4', () => props.setGamesize(4)]
      ]} />
      <DropDown setGamesize={props.setGamesize} title={'Сложность'} items={[
        ['Лёгкая', () => props.setComplexety(1.34*props.gameSize)],
        ['Средняя', () => props.setComplexety(Math.floor(1.67*props.gameSize))],
        ['Сложная', () => props.setComplexety(Math.floor(2*props.gameSize))]
      ]} />
    </div>
  )
}
