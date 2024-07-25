import React from 'react'
import img1 from "../assets/day2/1.jpg"
import img2 from "../assets/day2/2.jpg"
import img3 from "../assets/day2/3.jpg"
import img4 from "../assets/day2/4.jpg"
import img5 from "../assets/day2/5.jpg"
import img6 from "../assets/day2/6.jpg"
import img7 from "../assets/day2/7.jpg"
import img8 from "../assets/day2/8.jpg"
import img9 from "../assets/day2/9.jpg"
import img10 from "../assets/day2/10.mp4"
import img11 from "../assets/day2/11.mp4"
import img12 from "../assets/day2/12.mp4"
import img13 from "../assets/day2/13.mp4"
import img14 from "../assets/day2/14.jpg"
import img15 from "../assets/day2/15.jpg"
import img16 from "../assets/day2/16.jpg"
import img17 from "../assets/day2/17.jpg"
import img18 from "../assets/day2/18.jpg"
import img19 from "../assets/day2/19.jpg"
import img20 from "../assets/day2/20.jpg"
// import imge7 from '../assets/image/newPl/7.png'
// import imge8 from '../assets/image/newPl/8.png'
import ButtonNP from '../buttonNP'
import "./Day.css"
const Day3 = () =>{

    return(
        <div className="allDay">
           <h1>ПРИНЦИП РАБОТЫ С ТИКЕТАМИ</h1>
            <p className='textDay8'>
                <img src={img1}/>
                </p>  
                <h1>КАК ПОДДЕРЖКА РАБОТАЕТ С ТИКЕТАМИ?</h1>   
                <p className='textDay8'>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img6}/>
                <img src={img7}/>
                <img src={img8}/>
                <img src={img9}/>
                </p>
                     {/* <p className='textDay8'>
                <img src={img10}/>
                <img src={img11}/>
                <img src={img12}/>
            </p> */}
            <h1>РАБОЧИЙ КАБИНЕТ ДРОПА</h1>
            <h2>РЕГИСТРАЦИЯ</h2>
            <p className='textDay8'>
            <video width="600" controls>
        <source src={img10} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </p>
            <h2>РАБОЧИЙ КАБИНЕТ</h2>
            <p className='textDay8'>
            <video width="600" controls>
        <source src={img11} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </p>
            <h2>ДЕПОЗИТ</h2>
            <p className='textDay8'>
            <video width="600" controls>
        <source src={img12} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </p>
            <h2>ВЫВОД</h2>
            <p className='textDay8'>
            <video width="600" controls>
        <source src={img13} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </p>
            <h2>ЛИМИТЫ</h2>
            <p className='textDay8'>
                <img src={img14}/>
                <img src={img15}/>
                <img src={img16}/>
                <img src={img17}/>
                <img src={img18}/>
                <img src={img19}/>
                </p>
                <h2>ВАЖНО</h2>
                <h3>Ранги распространяются только на физиков, у команд обычно автоматически стоит 10 ранг.</h3>
                <p className='textDay8'>

                <img src={img20}/>
                </p>
            <ButtonNP currentDay={3}/>
        </div>
    )
}

export default Day3;
