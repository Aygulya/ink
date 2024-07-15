// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import './learnStyles.css';

// // const ButtonNP = () => {
// //     const navigate = useNavigate();
// //     const { dayNumber } = useParams();
// //     const [currentDay, setCurrentDay] = useState(1);

// //     useEffect(() => {
// //         const day = parseInt(dayNumber, 10);
// //         if (!isNaN(day) && day >= 1 && day <= 10) {
// //             setCurrentDay(day);
// //         }
// //     }, [dayNumber]);

// //     const prev = () => {
// //         if (currentDay > 1) {
// //             const prevDay = currentDay - 1;
// //             navigate(`/prosmotr/day${prevDay}`);
// //         }
// //     };

// //     const next = () => {
// //         if (currentDay < 10) {
// //             const nextDay = currentDay + 1;
// //             navigate(`/prosmotr/day${nextDay}`);
// //         }
// //     };

// //     return (
// //         <div className='butNP'>
// //             <button onClick={prev} className="buttonNP">предыдущий день</button>
// //             <button onClick={next} className="buttonNP">следующий день</button>
// //         </div>
// //     );
// // }

// // export default ButtonNP;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './learnStyles.css';

// const ButtonNP = () => {
//     const navigate = useNavigate();
//     const { dayNumber } = useParams();
//     const [currentDay, setCurrentDay] = useState(1);

//     useEffect(() => {
//         const day = parseInt(dayNumber, 10);
//         if (!isNaN(day) && day >= 1 && day <= 10) {
//             setCurrentDay(day);
//         }
//     }, [dayNumber]);

//     const prev = () => {
//         if (currentDay > 1) {
//             // prevDay = currentDay - 1;
//             setCurrentDay(day);
//             // console.log('Prev button clicked:',typeof (prevDay));
//             navigate(`/prosmotr/day${day}`);
//         }
//     };

//     const next = () => {
//         if (currentDay < 10) { // Assuming there are 10 days
//             // newDay = currentDay + 1;
//             setCurrentDay(day);
//             console.log('Next button clicked:', day);
//             navigate(`/prosmotr/day${day}`);
//         }
//     };

//     console.log('Current Day:', typeof(currentDay));

//     return (
//         <div className='butNP'>
//             <button onClick={prev} className="buttonNP">предыдущий день</button>
//             <button onClick={next} className="buttonNP">следующий день</button>
//         </div>
//     );
// }

// export default ButtonNP;
import React from "react";
import { useNavigate } from "react-router-dom";
import './learnStyles.css';

const ButtonNP = ({ currentDay }) => {
    const navigate = useNavigate();

    const prev = () => {
        if (currentDay > 1) {
            const prevDay = currentDay - 1;
            navigate(`/prosmotr/day${prevDay}`);
        }
    };

    const next = () => {
        if (currentDay < 10) { // Assuming there are 10 days
            const nextDay = currentDay + 1;
            navigate(`/prosmotr/day${nextDay}`);
        }
    };

    return (
        <div className='butNP'>
            <button onClick={prev} className="buttonNP">предыдущий день</button>
            <button onClick={next} className="buttonNP">следующий день</button>
        </div>
    );
}

export default ButtonNP;
