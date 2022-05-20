import React from 'react'
import classes from './Cell.module.css'

function checkValue(value){
  if(value!==0){
    return value
  }
  return null
}

export default function Cell(props) {
  let StyleCell = classes.InnerText
  let className = classes.Cell
  

  const findStyle = () => {
    if((props.position['x']+1)%props.gameSize===0){
      className = classes.Right
    }
    else if((props.position['x'])%props.gameSize===0){
      className = classes.Left
    }
    else if((props.position['y']+1)%props.gameSize===0){
      className = classes.Down
    }
    else if((props.position['y'])%props.gameSize===0){
      className = classes.Top
    }

    if(((props.position['y'])%props.gameSize===0)&&((props.position['x']+1)%props.gameSize===0)){
      className = classes.TopRight
    }
    else if(((props.position['y']+1)%props.gameSize===0)&&((props.position['x']+1)%props.gameSize===0)){
      className = classes.RightDown
    }
    else if(((props.position['y']+1)%props.gameSize===0)&&((props.position['x'])%props.gameSize===0)){
      className = classes.DownLeft
    }
    else if(((props.position['y'])%props.gameSize===0)&&((props.position['x'])%props.gameSize===0)){
      className = classes.LeftTop
    }
  }   
  const comparePositions = () =>{
    if((props.selectedCell['x']===props.position['x'])&&
      (props.selectedCell['y']===props.position['y']))
    {
      StyleCell = classes.InnerTextSelected
    }
  }

  findStyle()
  comparePositions()
  return (
    <div 
    className={className}
    onClick={() =>{props.setSelectedCell(props.position)}}>
        <div className={StyleCell}>
          {checkValue(props.value)}
        </div>
    </div>
  )
}


