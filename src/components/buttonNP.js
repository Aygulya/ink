import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './learnStyles.css'

const ButtonNP = () => {
    const navigate = useNavigate();
    const [currentDay, setCurrentDay] = useState(1);

    const prev = () => {
        if (currentDay > 1) {
            const newDay = currentDay - 1;
            setCurrentDay(newDay);
            navigate(`/prosmotr/day${newDay}`);
        }
    };

    const next = () => {
        if (currentDay < 10) { // Assuming there are 10 days
            const newDay = currentDay + 1;
            setCurrentDay(newDay);
            navigate(`/prosmotr/day${newDay}`);
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
