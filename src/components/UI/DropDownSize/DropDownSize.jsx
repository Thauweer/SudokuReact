import React from 'react'
import classes from './DropDownSize.module.css'

export default function DropDownSize(props) {
  return (
      <div className={classes.dropdown}>
          <span>Размер поля</span>
          <div className={classes.dropdownContent}>
              <p 
              //onClick={props.setGamesize(3)}
              >3x3</p>
              <p 
              //gitonClick={props.setGamesize(4)}
              >4x4</p>
          </div>
      </div>
  )
}
