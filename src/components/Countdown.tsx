import style from '../styles/components/Countdown.module.css';

export function Countdown() {


  return(
      <div>

        <div className={style.countdownContainer}>

          <div>
            <span>2</span>
            <span>5</span>
          </div>
          <span>:</span>
          <div>
            <span>8</span>
            <span>8</span>
          </div>

        </div>

        <button type="button" className={style.countdownButton}>
          Iniciar um ciclo
        </button>

      </div>
  );
}