import React from 'react'
import img1 from '../assets/image/p/0001.jpg'
import img2 from '../assets/image/p/0002.jpg'
import img3 from '../assets/image/p/0003.jpg'
import img4 from '../assets/image/p/0004.jpg'
import img5 from '../assets/image/p/0005.jpg'
import img6 from '../assets/image/p/0006.jpg'
import img7 from '../assets/image/p/╨д╨и ╨б╨С╨Х╨а (1)_page-0001.jpg'
import img8 from '../assets/image/p/╨д╨и ╨б╨С╨Х╨а (1)_page-0002.jpg'
import img9 from '../assets/image/p/╨д╨и ╨б╨С╨Х╨а (1)_page-0003.jpg'
import img10 from '../assets/image/p/╨д╨и ╨б╨С╨Х╨а (1)_page-0004.jpg'
import img11 from '../assets/image/p/╨д╨и ╨б╨С╨Х╨а (1)_page-0005.jpg'
import img12 from '../assets/image/p/╨д╨и ╨б╨С╨Х╨а (1)_page-0006.jpg'
import imge1 from '../assets/image/newPl/1.png'
import imge2 from '../assets/image/newPl/2.png'
import imge3 from '../assets/image/newPl/3.png'
import imge4 from '../assets/image/newPl/4.png'
import imge5 from '../assets/image/newPl/5.png'
import imge6 from '../assets/image/newPl/6.png'
// import imge7 from '../assets/image/newPl/7.png'
// import imge8 from '../assets/image/newPl/8.png'
import "./Day.css"
const Day3 = () =>{

    return(
        <div className="allDay">
           <h3>ФШ СБЕР</h3>
            <p className='textDay8'>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img6}/>
                </p>    <h3>ФШ ЧЕКИ ТИНЬК И АЛЬФА</h3>        <p className='textDay8'>
                <img src={img7}/>
                <img src={img8}/>
                <img src={img9}/>
                <img src={img10}/>
                <img src={img11}/>
                <img src={img12}/>
            </p>
            <h3>Просроченный депозит</h3>
            <p className='textDay8'>
                <img src={imge1}/>
                <img src={imge2}/>
                <img src={imge3}/>
                <img src={imge4}/>
                <img src={imge5}/>
                <img src={imge6}/>
                {/* <img src={imge7}/>
                <img src={imge8}/> */}
            </p>
        </div>
    )
}

export default Day3;
