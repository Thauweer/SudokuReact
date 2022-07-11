import React from 'react'
import classes from './DropDown.module.css'

export default function DropDown(props) {
  return (
      <div className={classes.dropdown}>
          <span>⌄</span> <span>{props.title}</span>
          <div className={classes.dropdownContent}>
              {props.items.map((el, i)=>{
                  return (<button key={i}
                  onClick={el[1]}
                  >{el[0]}</button>)
              })}
          </div>
      </div>
  )
}
