import React from 'react';
import FlipPage from 'react-flip-page';
import './books.css'; // Измените имя файла CSS на bookStyles.css
import i01 from './../assets/day8book/p1.jpg';
import i02 from './../assets/day8book/p2.jpg';
import i03 from './../assets/day8book/p3.jpg';
import i04 from './../assets/day8book/p4.jpg';
import i05 from './../assets/day8book/p5.jpg';
import i06 from './../assets/day8book/p6.jpg';
import i07 from './../assets/day8book/p7.jpg';
import i08 from './../assets/day8book/p8.jpg';
import i09 from './../assets/day8book/p9.jpg';
import i10 from './../assets/day8book/p10.jpg';
import i11 from './../assets/day8book/p11.jpg';
import i12 from './../assets/day8book/p12.jpg';
import i13 from './../assets/day8book/p13.jpg';

const pageImages = [
    { src: i01 },
    { src: i02 },
    { src: i03 },
    { src: i04 },
    { src: i05 },
    { src: i06 },
    { src: i07 },
    { src: i08 },
    { src: i09 },
    { src: i10 },
    { src: i11 },
    { src: i12 },
    { src: i13 }
];

const BookComponent = () => {
    return (
        <div className="book-wrapper">
            <FlipPage
                orientation="horizontal"
                showSwipeHint={true}
                showCover={true}
                uncutPages={true}
                className="flip-container"
            >
                {pageImages.map((page, idx) => (
                    <article key={idx} className="page">
                        <img src={page.src} alt={`Page ${idx + 1}`} className="page-image" />
                    </article>
                ))}
            </FlipPage>
        </div>
    );
}

export default BookComponent;
