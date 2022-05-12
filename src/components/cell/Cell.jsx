import React, {useState} from 'react'
import classes from './Cell.module.css'

function checkValue(value){
  if(value!==0){
    return value
  }
  return null
}

export default function Cell(props) {
  const [consist, setconsist] = useState(checkValue(props.value))
  let StyleCell = classes.InnerText
  let className = classes.Cell

  const findStyle = () => {
    if((props.position['x']+1)%3===0){
      className = classes.Right
    }
    else if((props.position['x'])%3===0){
      className = classes.Left
    }
    else if((props.position['y']+1)%3===0){
      className = classes.Down
    }
    else if((props.position['y'])%3===0){
      className = classes.Top
    }

    if(((props.position['y'])%3===0)&&((props.position['x']+1)%3===0)){
      className = classes.TopRight
    }
    else if(((props.position['y']+1)%3===0)&&((props.position['x']+1)%3===0)){
      className = classes.RightDown
    }
    else if(((props.position['y']+1)%3===0)&&((props.position['x'])%3===0)){
      className = classes.DownLeft
    }
    else if(((props.position['y'])%3===0)&&((props.position['x'])%3===0)){
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
  const handClick = () => {
    props.setSelectedCell(props.position)
    props.updeateCellData(setconsist)  
  }

  findStyle()
  comparePositions()
  return (
    <div 
    className={className}
    onClick={() =>
      handClick()          
      }>
        <div className={StyleCell}>
          {consist}
        </div>
    </div>
  )
}


