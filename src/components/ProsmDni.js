import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Prosmotr = () => {
    

    return (
        <div className='days'>
            <Link to='/prosmotr/day1' className='day'>
                <p>
                    <h3>Вступление</h3>
                    {/* <span className='bold'>Тема: </span> */}
                </p>
            </Link>
            <Link to='/prosmotr/day2' className='day'>
                <p>
                    <h3>День первый</h3>
                    <span className='bold'>Тема: система поддержка</span>
                </p>
            </Link>
            <Link to='/prosmotr/day3' className='day'>
                <p>
                    <h3>День второй</h3>
                    <span className='bold'>Тема: система поддержка</span>
                </p>
            </Link>
            <Link to='/prosmotr/day4' className='day'>
                <p>
                    <h3>День третий</h3>
                    <span className='bold'>Тема: партнерка, таблица  </span>
                </p>
            </Link>
            {/* <Link to='/prosmotr/day5' className='day'>
                <p>
                    <h3>День 5</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link>
            <Link to='/prosmotr/day6' className='day'>
                <p>
                    <h3>День 6</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link>
            <Link to='/prosmotr/day7' className='day'>
                <p>
                    <h3>День 7</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link>
            <Link to='/prosmotr/day8' className='day'>
                <p>
                    <h3>День 8</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link>
            <Link to='/prosmotr/day9' className='day'>
                <p>
                    <h3>День 9</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link>
            <Link to='/prosmotr/day10' className='day'>
                <p>
                    <h3>День 10</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link> */}

        </div>
    );
}

export default Prosmotr;
