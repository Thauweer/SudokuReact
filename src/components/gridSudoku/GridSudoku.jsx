import React, {useReducer, useState} from 'react'
import Row from '../row/Row'
import classes from './GridSudoku.module.css'
import NumButtonPanel from '../UI/NumButtons/NumButtonPanel'
import {Sudoku} from '../../models/sudoku/Sudoku'

export default function GridSudoku() { 
    const sudoku = new Sudoku(3).field
    const [selectedCell, setSelectedCell] = useState({'x':0, 'y':0})
    const [gameField, dispatchGameField] = useReducer(
      reducerGameField,
        sudoku
    )
    const [updateCell, setupdateCell] = useState(() =>{})

    function reducerGameField(state, num){
      state[selectedCell['y']][selectedCell['x']] = num
      updateCell(num)
      return state
    }

    function updeateCellData(setstate){
      setupdateCell(() =>  setstate)
    }

  return (
    <div className={classes.GridSudoku}>
        {gameField.map((row, index) =>
            <Row 
            row={row} 
            key={index} 
            index={index} 
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            updeateCellData={updeateCellData}
            />)
        }
        <NumButtonPanel dispatchGameField={dispatchGameField}/>
    </div>
  )
}
