import React from 'react'
import './Circles.css'

function Circles(props) {
    
      return (
        <div className="Circles">
         <div className={props.circleSelector1 ? 'selected' : 'unselected'}> 1 </div>
            <div className={props.circleSelector2 ? 'selected' : 'unselected'}> 2 </div>
            <div className={props.circleSelector3 ? 'selected' : 'unselected'}> 3 </div>
            <div className={props.circleSelector4 ? 'selected' : 'unselected'}> 4 </div>
    
        </div>
      )
}

export default Circles


