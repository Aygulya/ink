import React from 'react'
import "./Day.css"
import limit from '../assets/image/limitsBanks.png'
import s1 from "../assets/day4/systLimits1.jpg"
import s2 from "../assets/day4/s2.jpg"
import s3 from "../assets/day4/s3.jpg"
import spisok from '../assets/image/spisokUrovni.jpg'
import img1 from '../assets/image/day5.png'
import imstop from '../assets/image/stop.jpg'
import img2 from '../assets/image/day5.2.png'
import orOrBl from '../assets/image/orange.png'
import ButtonNP from '../buttonNP'
import Header from '../Header'
const Day6 = () =>{

    return(
        <>
                            <Header currentDay={6} /> 
        <div className= "allDay">
           
  <h3> БАЛАНС:</h3>
          <p className='textDay'>
Балансом считается баланс рабочих средств. В него не входит
вознаграждение.<br/>
Так как наша система не связана напрямую с картами агентов -
баланс является виртуальным отображением суммы, которая
должна быть на карте в виде рабочих средств.<br/>
Фактический баланс никогда НЕ должен быть меньше, чем
баланс в системе, в ином случае - это 100% расхождение.
</p>
<h3>ЛИМИТЫ: </h3>
<p className='textDay8'>
<img src={limit} alt='Limits'/>
</p>
<p className='textDay8'>
<img src={s1} alt='Limits'/>
<img src={s2} alt='Limits'/>
<img src={s3} alt='Limits'/>
</p>
{/* <p className='textDay'>
Информация о лимитах - важная часть рабочего процесса.<br/>
Понимание лимитов помогает при обращении агента с тем или
иным запросом. Самый частый вопрос, ответ на который кроется
в лимитах - «Почему мне не поступают ордера?»<br/>
Лимиты в системе - установлены системно. НЕ имеют точного
соотношения с фактическими лимитами по картам держателей.
Зависят от ранга. Дневной лимит и месячный лимит - это лимит
на обороты. У каждого банка свои лимиты.<br/>
Дневной обновляется ежедневно. Месячный каждый 1й день
месяца.<br/>
Обновляются в системе в 00:00 по UTC, т.е. в 03:00 по мск.<br/>
Лимит по балансу - ограничение по максимальному остатку.<br/>
Следовательно - на ПОПОЛНЕНИЯ (вводы/депы). Относится к
каждой отдельной карте, также зависит от ранга дропа. На
данный момент, максимальный лимит по балансу отдельной
карты составляет 100 000р.<br/>
Если агента не устраивают системные лимиты, мы советуем ему
добавлять новые карты других банков, а также работать
активнее, что бы повышать свой ранг (если он меньше 9-го).<br/>
Фактические лимиты также могут быть месячными, и суточными.<br/>
Тут всё индивидуально, и распознаётся только в ходе общения с
агентом, так как мы не можем заранее знать об особенностях
каждой карты агента.<br/>
</p> */}
<h3>РАНГИ:</h3>
<p className='textDay'>
Ранг ощутимо влияет на эффективность работы агента,
повышать ранг входит в его интересы Чем выше ранг, тем выше
максимально возможный остаток на балансе. Максимальный
ранг, который можно получить естественным путём - 9й.
10й ранг устанавливается в условиях согласования с партнёром.
Ранг обновляется 1го числа каждого лимиты, мы советуем ему
добавлять новые карты других банков, а также работать
активнее, что бы повышать свой ранг(если он меньше 9го).
Как повышается ранг (естественный путь)? 
</p><p className='textDay8'>
<img src={spisok} alt='spisok urovnei'/><br/><br/>
</p><p className='textDay'>
Ранг повышается по принципу 3 к 1, где оборот должен втрое
превысить максимальный баланс по аккаунту (который как раз и
зависит от ранга). Как только это происходит - его текущий и
получаемый ранг увеличивается на следующую ступень.<br/>
Оборот - сумма подтверждённых в месяца. Текущий ранг - ранг в
этом месяце, и он не уменьшится, пока не наступит новый
месяц. Текущий ранг может увеличиться, если достигнуть
соответствующего повышению ранга оборота.<br/>
Получаемый ранг - может меняться, и указывает нам на то, на
каком уровне сейчас оборот относительно его максимального
баланса по карте, а также, является гарантией того, каким будет
ранг в следующем месяце(если текущий ранг не 10й) системе
пополнений и выводов. 
            </p>
            <p className='textDay8'>
            <img src={img1} alt='promo'/>
            <img src={imstop}/>
            <img src={img2} alt='promo'/>
            </p>

            <h3>Оранжевая и Синаяя</h3>
<p className='textDay8'>
    <img src={orOrBl} alt='Orange & Blue'/>
</p>
<ButtonNP currentDay={6}/>
        </div>
        </>
    )
}

export default Day6;
