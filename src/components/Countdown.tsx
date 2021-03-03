import { useState, useEffect } from 'react';
import style from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  // hook de count down
  const [time, setTime] = useState(0.1 * 60);

  // criando um estado
  const [isActive, setIsActive] = useState(false);

  // quando finalizar o countdown
  const [hasFineshed, setHasFineshed] = useState(false);

  // arrendo os minutos para baixo
  const minutes = Math.floor(time / 60);

  // calcula pegando o resto da divisão
  const secunds = time % 60;

  // monta os minutos e converte em string o valor
  // padStart (verifica se existe 2 caracteres, caso não passa o 0 para a esquerda, ex: o vaor "5" retornaria 05)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout); // cancela o setTimeout para não diminuir um segundo quando é parado o timeout
    setIsActive(false);
    // volta o setTime para o valor inicial
    setTime(0.1 * 60)
  }

  // setando o use effect, inicia com uma function (no caso usei uma arrow function), depois o quando ele deve disparar a função, no caso toda vez que active mudar
  // useEffect = a um gerador de efeitos colaterais
  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time -1);
      }, 1000);
    } else if(isActive && time === 0) {
      console.log('finalizou o count down');
      setHasFineshed(true);
      setIsActive(false);
    }
    console.log(isActive);
  }, [isActive, time])

  // no return temos um if ternário em mais de uma linha

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

        { hasFineshed ? (
          <button
            disabled
            className={style.countdownButton}
          >
            Ciclo encerrado
          </button>
        ) :(
          <>
            { isActive ? (
              <button
                type="button"
                className={`${style.countdownButton} ${style.countdownButtonActive}`}
                onClick={resetCountDown}
              >
                Abandonar ciclo
              </button>
              ) : (
              <button
                type="button"
                className={style.countdownButton}
                onClick={startCountDown}
              >
                Iniciar um ciclo
              </button>
            )}
          </>
        ) }





      </div>
  );
}