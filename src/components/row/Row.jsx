import React, { Component } from 'react'
import Cell from '../cell/Cell'
import classes from './Row.module.css'

export default class Row extends Component {
  render() {
    return (
      <div className={classes.Row}>
          {this.props.row.map((value, index) =>
                <Cell 
                value={value} 
                key={index} 
                position={{
                  x:index,
                  y:this.props.index, 
                }}
                selectedCell={this.props.selectedCell}
                setSelectedCell={this.props.setSelectedCell}
                updeateCellData={this.props.updeateCellData}
              />
            )}
      </div>
    )
  }
}
