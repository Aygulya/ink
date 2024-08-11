import React from 'react'
import img1 from '../assets/image/8.1.png'
import img2 from '../assets/image/8.2.png'
import img3 from '../assets/image/8.3.png'
import img4 from '../assets/image/8.4.png'
import img5 from '../assets/image/8.5.png'
import img6 from '../assets/image/8.6.png'
import vid from '../assets/image/vidy-1.png'
import img from '../assets/image/8.png'
import chatD from '../assets/image/chatDrop.jpg'
import day81 from '../assets/image/day81.png'
import day82 from '../assets/image/day82.png'
import day83 from '../assets/image/day83.png'
import day84 from '../assets/image/day84.png'
import day85 from '../assets/image/day85.png'
import day86 from '../assets/image/day86.png'
import d81 from '../assets/day8/d1.jpg'
import d82 from '../assets/day8/d2.jpg'
import "./Day.css"
import ButtonNP from '../buttonNP'
import Header from '../Header'
import Day8book from './Day8book'
const Day8 = () =>{

    return(
      <>
                            <Header currentDay={8} /> 
        <div className= "allDay">
                        <p className='textDay8'>
                        <img src={img1} alt='page1'/>
                <img src={img2} alt='page2'/>               
                 <img src={img3} alt='page3'/>
                <img src={img4} alt='page4'/>              
                  <img src={img5} alt='page5'/>
                <img src={img6} alt='page6'/>               

                        </p>
                        <h3>Фиксация ошибки агента</h3>
                        <p className='textDay'>
<span className='bold'>КОГДА МЫ ПОНИМАЕМ, ЧТО ПРОИЗОШЛА ОШИБКА</span> <br/>
<img src={img} alt='Wrong'/><br/>
<span className='bold'>Первое</span>, что нужно сделать - удостовериться в том, что произошла потеря
средств.<br/>
<span className='bold'>Второе </span>- обязательно передать ошибку в группу своей смены(до выхода в
смену в группу support). Передаём ВСЕ ошибки, вне зависимости от
промокода и суммы потери. <br/><br/><br/>
Шаблон передачи ошибки: <br/><br/>
Имя агента + тг <br/>

Краткое описание ошибки<br/>
Ордер:<br/>
Карта агента:<br/>
Сумма ошибки:<br/>
Промокод.<br/>
                        </p>
<p className='textDay8'>
  <img src={vid}/>
  {/* <img src={chatD}/> */}
</p>
<Day8book/>
{/* <p className='textDay8'>
<img src={day81}/>
<img src={day82}/>
<img src={day83}/>
<img src={day84}/>
<img src={day85}/>
<img src={day86}/>

</p> */}
<p className='textDay8'>
    <img src={d81}/>
    <img src={d82}/>
</p>
<ButtonNP currentDay={8}/>
        </div>
        </>
    )
}

export default Day8;
