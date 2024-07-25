import React from 'react'
import "./Day.css"
import frame from '../assets/image/frame.png'
import day101 from '../assets/image/day101.png'
import day102 from '../assets/image/day102.png'
import day103 from '../assets/image/day103.png'
import day104 from '../assets/image/day104.png'
import day105 from '../assets/image/day105.png'
import ButtonNP from '../buttonNP'
const Day10 = () =>{

    return(
        <div className= "allDay">
           <p className='textDay'>
           <a href='https://forms.gle/EuJxt6A8RrBkqNhE6' target="_blank" rel="noopener noreferrer">
           Финальный тест</a>

            <h3> И ещё немного полезной информации</h3>
            <h1>Горячие клавиши</h1>
            <p className='textDay8'>
                <img src={day102}/>
            </p>
            <h1>Методы работы</h1>
            <p className='textDay8'>
                <img src={day103}/>
            </p>
            <h1>Программы для удобства</h1>
            <p className='textDay8'>
                <img src={day104}/>
            </p>
            <h1>Рабочее пространство</h1>
            <p className='textDay8'>
                <img src={day105}/>
            </p>
            <p className='textDay8'>
                <img src={frame}/>
            </p>
            </p>
            <ButtonNP currentDay={10}/>
        </div>
    )
}

export default Day10;
