import React from 'react'
import './CircleSelector.css'

function CircleSelector(props) {

  const handleCircleSelector1 = (e) => {
    props.setCircleSelector1(!props.circleSelector1)
  }

  const handleCircleSelector2 = (e) => {
    props.setCircleSelector2(!props.circleSelector2)
  }

  const handleCircleSelector3 = (e) => {
    props.setCircleSelector3(!props.circleSelector3)
  }

  const handleCircleSelector4 = (e) => {
    props.setCircleSelector4(!props.circleSelector4)
  }

  return (
    <div className='CircleSelector'>
       <button onClick={handleCircleSelector1} className={props.circleSelector1 ? 'selected' : 'unselected'} >
          {props.circleSelector1 ? 'Circle 1 Selected' : 'Select Circle 1'} 
      </button> 

      <button onClick={handleCircleSelector2} className={props.circleSelector2 ? 'selected' : 'unselected'} >
          {props.circleSelector2 ? 'Circle 2 Selected' : 'Select Circle 2'} 
      </button> 

      <button onClick={handleCircleSelector3} className={props.circleSelector3 ? 'selected' : 'unselected'} >
          {props.circleSelector3 ? 'Circle 3 Selected' : 'Select Circle 3'} 
      </button> 

      <button onClick={handleCircleSelector4} className={props.circleSelector4 ? 'selected' : 'unselected'} >
          {props.circleSelector4 ? 'Circle 4 Selected' : 'Select Circle 4'} 
      </button> 

    </div>
  )
}

export default CircleSelector