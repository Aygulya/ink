import React from 'react'
import "./Day.css"
import img1 from '../assets/image/perenosB.png'
import img2 from '../assets/image/finVyvod.png'
const Day7 = () =>{

    return(
        <div className= "allDay">
        
            <p className='textDay8'>
                <img src={img1} alt='Перенос баланса'/>
                <img src={img2} alt='Финальный вывод'/>
            </p>
        </div>
    )
}

export default Day7;
