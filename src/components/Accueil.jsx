import React, { useEffect } from "react";
import Image from "react-image-webp";

const Accueil = ({ setIsPlaying, isMobile }) => {

  useEffect ( () => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className={isMobile ? "container accueil mobile" : "container accueil"}
    >
      <header>
        <a href="https://www.btg-communication.fr" target="_blank">
          <span className="screen-reader-text">Se rendre sur le site de BTG Communication</span>
          <img
            src='https://btg-communication.fr/wp-content/uploads/2018/11/logo-btg-encadre.svg'
            alt='BTG Communication, agence de communication à Tours'
          />
        </a>
      </header>
      <h1>
        <Image loading="lazy"
          src='./src/img/logo-btg.png'
          webp='./src/img/logo-btg.webp'
          alt='BTG Communication, agence de communication à 360°'
        />
        Trouve nous !
      </h1>
      <strong>
        Trouve les six oeufs cachés dans le décor à l'occasion de Pâques !
      </strong>
      {isMobile && (
        <p className='recommandation'>
          Il est recommandé de jouer sur un ordinateur pour profiter pleinement
          de l'expérience
        </p>
      )}
      <div className='egg-troll'>
        <Image loading="lazy"
          src='./src/img/egg-un.png'
          webp='./src/img/egg-un.webp'
          alt='seras-tu nous trouver ?'
        />
        <Image loading="lazy"
          src='./src/img/egg-deux.png'
          webp='./src/img/egg-deux.webp'
          alt='seras-tu nous trouver ?'
        />
        <Image loading="lazy"
          src='./src/img/egg-trois.png'
          webp='./src/img/egg-trois.webp'
          alt='seras-tu nous trouver ?'
        />
        <Image loading="lazy"
          src='./src/img/egg-quatre.png'
          webp='./src/img/egg-quatre.webp'
          alt='seras-tu nous trouver ?'
        />
        <Image loading="lazy"
          src='./src/img/egg-cinq.png'
          webp='./src/img/egg-cinq.webp'
          alt='seras-tu nous trouver ?'
        />
        <Image loading="lazy"
          src='./src/img/egg-six.png'
          webp='./src/img/egg-six.webp'
          alt='seras-tu nous trouver ?'
        />
      </div>
      <button className='startGame' onClick={() => setIsPlaying(true)}>
        <p>Partir à la chasse</p>
      </button>
    </div>
  );
};

export default Accueil;
