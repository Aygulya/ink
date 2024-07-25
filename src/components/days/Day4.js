import React from 'react';
import ButtonNP from '../buttonNP';
import "./Day.css";

const Day4 = () => {
    return (
        <div className="allDay"> {/* Исправлено: удален лишний "div" */}
            <h3>Пока все</h3>
            <ButtonNP currentDay={4} />
        </div>
    );
}

export default Day4;
