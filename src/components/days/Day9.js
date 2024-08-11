import React from 'react'
import { Link } from 'react-router-dom'
import "./Day.css"
import banki from '../assets/image/banki1.png'
import banki1 from '../assets/image/banki-2.png'
import d1 from '../assets/day9/d91.jpg'
import d2 from '../assets/day9/d2.jpg'
import d3 from '../assets/day9/d3.jpg'
import d4 from '../assets/day9/d4.jpg'
import d5 from '../assets/day9/d5.jpg'
import d6 from '../assets/day9/d6.jpg'
import d91 from '../assets/day9/d/d1.jpg'
import d92 from '../assets/day9/d/d2.jpg'
import d93 from '../assets/day9/d/d3.jpg'
import d94 from '../assets/day9/d/d4.jpg'
import ButtonNP from '../buttonNP'
import Header from '../Header'
const Day9 = () =>{

    return(
        <>
                            <Header currentDay={9} /> 
        <div className= "allDay">
            {/* <h3>Сверка выписки и нахождение расхождения баланса</h3> */}
<p className='textDay8'>
<img src={d1}/>
{/* Для того, чтобы приступить к сверке, вам необходимо узнать у дропа
информацию: <br/><br/>
<span className='bold'>1.</span> Спрашиваем по <span className='bold'>какой </span>карте/картам оно возникло (и после этого
замораживаем карту!).<br/>
«Нам необходимо понять по какой именно карте у вас возникло расхождение
баланса, чтобы проверить информацию.<br/>
Вы можете проверить баланс конкретной карты командой <span className='blue'>/cards</span>, затем
выбрать нужную карту, затем нажать «Баланс» и чат-бот покажет вам баланс
по конкретной карте.»<br/><br/>
<span className='bold'>2.</span> Спрашиваем скрин <span className='bold'>фактического </span>баланса на карте(картах).<br/>
<br/><span className='bold'>3.</span> Смотрим, если баланс <span className='bold'>выше </span>рабочего баланса в админке, то спрашиваем
какого рода расхождение у него(вероятно по вознаграждению).<br/>
Если баланс <span className='bold'>меньше </span>чем рабочий баланс, то вероятнее всего он допустил
ошибку в работе.<br/><br/>
<span className='bold'>4.</span> В обоих случаях спрашиваем: когда именно вы обнаружили расхождение
баланса?<br/><br/>
<span className='bold'>5.</span> Если <span className='bold'>карта сбер</span>: сбер даёт сделать выписку только через 2 дня от
текущей даты, и если он обнаружил расхождение вчера или сегодня, то
говорим:<br/>
- Так как сбербанк даёт сделать выписку только спустя 2 суток от текущей
даты, то нам необходимо попросить вас проверить все ордера за этот
период и сверить их с передвижениями по вашей карте(картам) чтобы
оперативно выявить ошибку. И после проверки он скинет результаты и
смотрим, из-за этой ошибки расхождение или нет..<br/>
Если <span className='bold'>карта тинькофф</span>, то можно запросить за любую дату, тинькофф
моментально выдаёт выписку.<br/>
(Инструкции по выпискам можно найти в гугле: как сделать pdf выписку по
карте тинькофф)<br/><br/>
<span className='bold'>6.</span> Проводим <span className='bold'>сверку </span>информации, чтобы выявить ошибку и выписываем все
найденные моменты в таблицу сверки.<br/><br/>
<span className='bold'>7.Если ошибки найдены</span>,
то отписываем дропу по классике, как по обычным депам и обязательно
спрашиваем чеки, чтобы подтвердить, что ошибки не было.
Если же ошибки не найдены, значит спрашиваем выписку за больший
период, возможно он просто неверно назвал дату расхождения и проверяем
также.<br/><br/>
<span className='bold'>8.</span> Если расхождение по вознаграждению, то спрашиваем выводил ли он его
раньше, проверяем в выписке <br/>сторонние траты, которые не по админке и
также можем назвать дропу:
- Видим, что ваших трат за данный период по нерабочим моментам было -
***р.<br/><br/>
Так же возможен случай, когда к <span className='bold'>одному</span> счёту привязано <span className='bold'>несколько </span>карт и
возможно выводы могли совершаться с другой карты от счёта илил
подтверждены депы по другой карте, соответственно при этом всём
алгоритм выше тот же самый.<br/><br/> */}
Все случаи индивидуальны, но это основные моменты, по которым мы
первично сможем определить причину расхождения.
</p>
<p className='textDay8'>
    <img src={d91}/>
    <img src={d92}/>
    <img src={d93}/>
    <img src={d94}/>
</p>
<p className='textDay8'>
    <img src={banki}/>
    <img src={banki1}/>
</p>
<Link to='https://docs.google.com/spreadsheets/d/12sSKbMnPkdBMl82fjsbMGUAYihEex_bq3G-BBw4pLkE/edit?usp=sharing'>
Таблица сверки расхождения
</Link>
<p className='textDay8'>
    <img src={d2}/>
    <img src={d3}/>
    <img src={d4}/>
    <img src={d5}/>
    <img src={d6}/>

</p>
<ButtonNP currentDay={9}/>
        </div>
        </>
    )
}

export default Day9;
