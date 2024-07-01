import React, { useState } from 'react';
// import './startDayStyles.css';
import LearningProgress from './LearningProgress';


function StartDay() {
    const [startDate, setStartDate] = useState('');
    const [showProgress, setShowProgress] = useState(false);

    const handleDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleStart = () => {
        if (startDate) {
            setShowProgress(true);
        }
    };

    return (
        <div className="start-day">
            <label htmlFor="start-date">Введите дату начала обучения:</label>
            <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={handleDateChange}
            />
            <button onClick={handleStart}>Начать обучение</button>
            {/* {showProgress && <LearningProgress startDate={startDate} />} */}
            <p> Den nachala obucheniya: {startDate}</p>
        </div>
    );
}

export default StartDay
