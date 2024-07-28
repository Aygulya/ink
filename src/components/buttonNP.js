
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import './learnStyles.css';

// const ButtonNP = ({ currentDay }) => {
//     const navigate = useNavigate();

//     const prev = () => {
//         if (currentDay > 1) {
//             const prevDay = currentDay - 1;
//             navigate(`/prosmotr/day${prevDay}`);
//         }
//     };

//     const next = () => {
//         if (currentDay < 10) { // Assuming there are 10 days
//             const nextDay = currentDay + 1;
//             navigate(`/prosmotr/day${nextDay}`);
//         }
//     };

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ButtonNP = ({ currentDay, iconOnly }) => {
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
            <button onClick={prev} className="buttonNP">
                {iconOnly ? <FontAwesomeIcon icon={faArrowLeft} className="buttonNPHead"/> : 'предыдущий день'}
            </button>
            <button onClick={next} className="buttonNP">
                {iconOnly ? <FontAwesomeIcon icon={faArrowRight} className="buttonNPHead"/> : 'следующий день'}
            </button>
        </div>
    );
}

export default ButtonNP;
