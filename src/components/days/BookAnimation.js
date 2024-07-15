import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';
import './Day.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const BookAnimation = () => {
    const images = [];

    for (let i = 1; i <= 9; i++) {
        images.push(require(`../assets/image/imagesBook/page${i}.jpg`));
        console.log(images)
    }

    const [index, setIndex] = useState(0);
    const [springs, set] = useSprings(images.length, i => ({ opacity: i === index ? 1 : 0 }));

    const next = () => setIndex(state => (state + 1) % images.length);
    const prev = () => setIndex(state => (state - 1 + images.length) % images.length);

    set(i => ({ opacity: i === index ? 1 : 0 }));

//     
return (
    <div className='book'>
                {/* <div className='buttonsBook'> */}
        <button onClick={prev} className='prev'>
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'/>
        </button>
        {/* </div> */}
        <div className="bookContainer">
        {springs.map((props, i) => (
            <animated.img
                key={i}
                style={{ ...props }}
                src={images[i]}
                className={i === index ? 'visible' : ''} // Добавляем класс 'visible' для текущей страницы
                alt={`Page ${i + 1}`}
            />
        ))}
        </div>
        {/* <div className='buttonsBook'> */}
        <button onClick={next} className='next'>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'/>
        </button>
        {/* </div> */}
    </div>
);

}

export default BookAnimation;
