import { useState, useEffect } from 'react';
import style from '../styles/components/Countdown.module.css';

export function Countdown() {

  // hook de count down
  const [time, setTime] = useState(26 * 60);

  // criando um estado
  const [active, setActive] = useState(false);

  // arrendo os minutos para baixo
  const minutes = Math.floor(time / 60);

  // calcula pegando o resto da divisão
  const secunds = time % 60;

  // monta os minutos e converte em string o valor
  // padStart (verifica se existe 2 caracteres, caso não passa o 0 para a esquerda, ex: o vaor "5" retornaria 05)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

  function startCountDown() {
    setActive(true);



  }

  // setando o use effect, inicia com uma function (no caso usei uma arrow function), depois o quando ele deve disparar a função, no caso toda vez que active mudar
  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time -1);
      }, 1000);
    }
    console.log(active);
  }, [active, time])


  return(
      <div>

        <div className={style.countdownContainer}>

          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secundLeft}</span>
            <span>{secundRight}</span>
          </div>

        </div>

        <button
          type="button"
          className={style.countdownButton}
          onClick={startCountDown}
        >
          Iniciar um ciclo
        </button>

      </div>
  );
}