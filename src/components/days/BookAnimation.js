// // import React, { useState } from 'react';
// // import { useSprings, animated } from 'react-spring';
// // import './Day.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

// // const BookAnimation = () => {
// //     const images = [];

// //     for (let i = 1; i <= 9; i++) {
// //         images.push(require(`../assets/image/imagesBook/page${i}.jpg`));
// //         console.log(images)
// //     }

// //     const [index, setIndex] = useState(0);
// //     const [springs, set] = useSprings(images.length, i => ({ opacity: i === index ? 1 : 0 }));

// //     const next = () => setIndex(state => (state + 1) % images.length);
// //     const prev = () => setIndex(state => (state - 1 + images.length) % images.length);

// //     set(i => ({ opacity: i === index ? 1 : 0 }));

// // //     
// // return (
// //     <div className='book'>
// //                 {/* <div className='buttonsBook'> */}
// //         <button onClick={prev} className='prev'>
// //         <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'/>
// //         </button>
// //         {/* </div> */}
// //         <div className="bookContainer">
// //         {springs.map((props, i) => (
// //             <animated.img
// //                 key={i}
// //                 style={{ ...props }}
// //                 src={images[i]}
// //                 className={i === index ? 'visible' : ''} // Добавляем класс 'visible' для текущей страницы
// //                 alt={`Page ${i + 1}`}
// //             />
// //         ))}
// //         </div>
// //         {/* <div className='buttonsBook'> */}
// //         <button onClick={next} className='next'>
// //         <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'/>
// //         </button>
// //         {/* </div> */}
// //     </div>
// // );

// // }

// // export default BookAnimation;
// import React, { useState } from 'react';
// import { useSprings, animated } from 'react-spring';
// import './Day.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


// const pages = [
//     { image: i01 },
//     { image: i01 },
//     { image: i01 },
//     { image: i01 },
//     { image: i01 },
//     { image: i01 },
//     { image: i01 },
//     { image: i01 },
//     { image: i01 }
// ]
// const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert('Text copied to clipboard!');
//     }).catch(err => {
//       alert('Failed to copy text: ' + err);
//     });
//   };
// const BookAnimation = () => {

      
// //     for (let i = 1; i <= 9; i++) {
// //         images.push(require(`../assets/image/imagesBook/page${i}.jpg`));
// //         console.log(images)
// //     }

// //     const [index, setIndex] = useState(0);
// //     const [springs, set] = useSprings(images.length, i => ({ opacity: i === index ? 1 : 0 }));

// //     const next = () => setIndex(state => (state + 1) % images.length);
// //     const prev = () => setIndex(state => (state - 1 + images.length) % images.length);

// //     set(i => ({ opacity: i === index ? 1 : 0 }));

// // //     
// // return (
// //     <div className='book'>
// //                 <div className='buttonsBook'> 
// //         <button onClick={prev} className='prev'>
// //         <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'/>
// //         </button>
// //         <button onClick={next} className='next'>
// //         <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'/>
// //         </button>
// //          </div> 
// //         <div className="bookContainer">
// //         {springs.map((props, i) => (
// //             <animated.img
// //                 key={i}
// //                 style={{ ...props }}
// //                 src={images[i]}
// //                 className={i === index ? 'visible' : ''} // Добавляем класс 'visible' для текущей страницы
// //                 alt={`Page ${i + 1}`}
// //             />
// //         ))}
// //         </div>
// //         {/* <div className='buttonsBook'> */}

// //         {/* </div> */}
// //     </div>
// return(
// <div className="book-container">
        
//         <FlipPage
//           orientation="horizontal"
//           showSwipeHint={true}
//           showCover={true}
//           uncutPages={true}
//           className="flip-page"
//         >
//              </FlipPage>
//         );
//         </div>
// )


// }

// export default BookAnimation;
import React from 'react';
import FlipPage from 'react-flip-page';
// import './Day.css';
import "./Book.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import i01 from './../assets/image/imagesBook/page1.jpg';
import i02 from './../assets/image/imagesBook/page2.jpg';
import i03 from './../assets/image/imagesBook/page3.jpg';
import i04 from './../assets/image/imagesBook/page4.jpg';
import i05 from './../assets/image/imagesBook/page5.jpg';
import i06 from './../assets/image/imagesBook/page6.jpg';
import i07 from './../assets/image/imagesBook/page7.jpg';
import i08 from './../assets/image/imagesBook/page8.jpg';
import i09 from './../assets/image/imagesBook/page9.jpg';

const pages = [
    { image: i01 },
    { image: i02 },
    { image: i03 },
    { image: i04 },
    { image: i05 },
    { image: i06 },
    { image: i07 },
    { image: i08 },
    { image: i09 }
];

const BookAnimation = () => {
    return (
        <div className="book-container">
            <FlipPage
                orientation="horizontal"
                showSwipeHint={true}
                showCover={true}
                uncutPages={true}
                className="flip-page"
            >
                {pages.map((page, index) => (
                    <article key={index}>
                        <img src={page.image} alt={`Page ${index + 1}`} className="book-page" />
                    </article>
                ))}
            </FlipPage>
            {/* <div className='buttonsBook'>
                <button onClick={() => document.querySelector('.flip-page .previous').click()} className='prev'>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' />
                </button>
                <button onClick={() => document.querySelector('.flip-page .next').click()} className='next'>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' />
                </button>
            </div> */}
        </div>
    );
}

export default BookAnimation;
