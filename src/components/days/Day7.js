import React from 'react'
import "./Day.css"
import img1 from '../assets/image/perenosB.png'
import img2 from '../assets/image/finVyvod.png'
import chat1 from '../assets/image/chat-1.png'
import chat2 from '../assets/image/chat-2.png'
import chat3 from '../assets/image/chat-3.png'
import chat4 from '../assets/image/chat-4.png'
import chat5 from '../assets/image/chat-5.png'
import chat6 from '../assets/image/chat-6.png'
import block from '../assets/image/block.jpg'
const Day7 = () =>{

    return(
        <div className= "allDay">
        
            <p className='textDay8'>
                <img src={img1} alt='Перенос баланса'/>
                <img src={img2} alt='Финальный вывод'/>
                <img src={chat1}/>
                <img src={chat2}/>
                <img src={chat3}/>
                <img src={chat4} />
                <img src={chat5} />
                <img src={chat6} />
                <img src={block}/>
            </p>
        </div>
    )
}

export default Day7;
