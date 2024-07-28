import React from 'react'
import "./Day.css"
import { Link } from 'react-router-dom'
import i1 from '../assets/day5/1.png'
import i2 from '../assets/day5/2.png'
import i3 from '../assets/day5/3.png'
import i4 from '../assets/day5/4.png'
import i5 from '../assets/day5/5.png'
import i6 from '../assets/day5/6.png'
import i7 from '../assets/day5/7.png'
import i8 from '../assets/day5/8.png'
import i9 from '../assets/day5/9.png'
import Header from '../Header'
import ButtonNP from '../buttonNP'
const Day5 = () =>{

    return(
        <>
                            <Header currentDay={5} /> 
        <div className= "allDay">
            
           <p className='textDay'>

            <Link to='https://forms.gle/bsLABmywyXgZLegH6'>тест для операторов 1ой недели</Link>
           </p>

           <p className='textDay8'>
                <img src={i1}/>
                <img src={i2}/>
                <img src={i3}/>
                <img src={i4}/>
                <img src={i5}/>
                <img src={i6}/>
                <img src={i7}/>
                <img src={i8}/>
                <img src={i9}/>
                </p>
          
<ButtonNP currentDay={5}/>
        </div>
        </>
    )
}

export default Day5;
