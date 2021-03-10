import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  return(

    <div className={style.challengeBoxContainer}>
      <div className={style.challengeNotActive}>
        <strong>Finalize um ciclo para receber desafios</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de levels completando desafios.
        </p>
      </div>
    </div>

  );
}