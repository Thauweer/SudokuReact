import React, { Component } from 'react'
import Row from '../row/Row'
import classes from './GridSudoku.module.css'
import NumButtonPanel from '../UI/NumButtons/NumButtonPanel'
import { Sudoku } from '../../sudoku/Sudoku'
import SudokuButtons from '../UI/SudokuButtons/SudokuButtons'

class GridSudoku extends Component {
  constructor(props) {
    super(props)
    this.sudoku = new Sudoku(4, 6)
    this.state = {
      field: this.sudoku.field,
      selectedCell: { 'x': 0, 'y': 0 },
      counterSteps: 0,
      gameSize: 4,
      complexety: 5
    }
    this.sudoku.setSetterField(this.setField)
  }

  dispatchGameField(num) {
    this.state.sudoku.changeCell(this.selectedCell, num)
  }

  setField = (field) => {
    this.setState((state, props) => {
      return { field: field }
    })
  }

  setSelectedCell = (position) => {
    this.setState((state, props) => {
      return { selectedCell: position }
    }
    )
  }

  incCounterSteps = () => {
    this.setState((state, props) => {
      return { counterSteps: state.counterSteps + 1 }
    })
  }

  restartCounterSteps = () => {
    this.setState((state) => {
      return { counterSteps: 0 }
    })
  }

  newGame = (size, complexety = this.state.complexety) => {
    this.sudoku.newGame(size, complexety)
    this.restartCounterSteps()
    this.setField(this.sudoku.field)
  }

  setGamesize = (size) => {
    this.setState((state) => {
      return { gameSize: size }
    })
    this.newGame(size)
  }

  setComplexety = (complexety) => {
    this.setState((state) => {
      return { complexety: complexety }
    })
    this.newGame(this.state.gameSize, complexety)
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
          gameSize={this.state.gameSize}
          newGame={this.newGame}
          setGamesize={this.setGamesize}
          setComplexety={this.setComplexety}
        />
      </div>
    )
  }
}

export default GridSudoku;

