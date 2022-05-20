import React, {Component} from 'react'
import Row from '../row/Row'
import classes from './GridSudoku.module.css'
import NumButtonPanel from '../UI/NumButtons/NumButtonPanel'
import {Sudoku} from '../../models/sudoku/Sudoku'
import SudokuButtons from '../UI/SudokuButtons/SudokuButtons'

class GridSudoku extends Component {
  constructor(props){
    super(props)   
    this.sudoku = new Sudoku(4, this.setField)
    this.state = {
      field : this.sudoku.field,    
      selectedCell : {'x':0, 'y':0},
      counterSteps : 0 ,
      gameSize : 4
    }
    this.sudoku.setSetterField(this.setField)
  }

  dispatchGameField(num){
    this.state.sudoku.changeCell(this.selectedCell, num)
  }

  setField = (field) => {
    this.setState((state, props)=>{
      return {field : field}
    })
  }

  setSelectedCell = (position) => { 
    this.setState((state, props) =>{
      return { selectedCell : position}
    }
    )
  }

  incCounterSteps = ()=>{
    this.setState( (state, props) =>{ 
      return {counterSteps : state.counterSteps + 1}
    }) 
  }

  restartCounterSteps = () =>{
    this.setState((state) =>{
      return {counterSteps : 0}
    })
  }

  newGame = () => {
    this.sudoku.newGame(this.state.gameSize)
    this.setField(this.sudoku.field)
    this.restartCounterSteps()
  }

  setGamesize = (size) =>{
    this.setState((state) =>{
      return {gameSize : size}
    })
  }

  render() {
    return (
      <div className={classes.GridSudoku}>
          <h1>
            Судоку {this.state.gameSize}x{this.state.gameSize}
          </h1>
          {this.state.field.map((row, index) =>
              <Row 
              row={row} 
              key={index} 
              index={index} 
              gameSize={this.state.gameSize}
              selectedCell={this.state.selectedCell}
              setSelectedCell={this.setSelectedCell}
              />)
          }
          <p>
            ходов: {this.state.counterSteps}
          </p>
          <NumButtonPanel 
          gameSize={this.state.gameSize}
          position={this.state.selectedCell}
          sudoku={this.sudoku}
          counterSteps={this.state.counterSteps}
          incCounterSteps={this.incCounterSteps}
          />
          <SudokuButtons 
          sudoku={this.sudoku}
          newGame={this.newGame}
          restartCounterSteps={this.restartCounterSteps}
          setGamesize={this.setGamesize}
          />
      </div>
    )
  }
}

export default GridSudoku;

