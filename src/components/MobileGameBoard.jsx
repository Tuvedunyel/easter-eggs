import React from "react";
import Image from "react-image-webp";

const MobileGameBoard = ({ setEggsFound, eggsFound, eggs, setEggs, gameComplete }) => {
  const handleFirstEgg = () => {
    if (eggs[0].found === false) {
      // setEggs[0].found = true
      setEggs(eggs.map(egg => (egg.id === 1 ? { ...egg, found: true } : egg)));

      setEggsFound(eggsFound + 1);
    }
  };

  const handleSecondEgg = () => {
    if (eggs[1].found === false) {
      // setEggs[1].found = true
      setEggs(eggs.map(egg => (egg.id === 2 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
    }
  };

  const handleThirdEgg = () => {
    if (eggs[2].found === false) {
      // setEggs[2].found = true
      setEggs(eggs.map(egg => (egg.id === 3 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
    }
  };

  const handleFourthEgg = () => {
    if (eggs[3].found === false) {
      // setEggs[3].found = true
      setEggs(eggs.map(egg => (egg.id === 4 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
    }
  };

  const handleFifthEgg = () => {
    if (eggs[4].found === false) {
      // setEggs[4].found = true
      setEggs(eggs.map(egg => (egg.id === 5 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
    }
  };

  const handleSixEgg = () => {
    if (eggs[5].found === false) {
      // setEggs[5].found = true
      setEggs(eggs.map(egg => (egg.id === 6 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
    }
  };
  return (
    <div
      className={
        gameComplete
          ? "container gameboard mobile complete"
          : "container gameboard mobile"
      }
    >
      <div className='mobile__cabaneContainer'>
        <Image loading="lazy"
          src='./src/img/cabane.png'
          webp='./src/img/cabane.webp'
          alt='Cabane à oiseau'
        />
        <button
          onClick={handleFirstEgg}
          className={eggs[0].found ? "eggButton discover" : "eggButton"}
        >
          <Image loading="lazy"
            src='./src/img/egg-un.png'
            webp='./src/img/egg-un.webp'
            alt='Premier oeuf'
            className='firstEgg'
          />
        </button>
      </div>
      <div className='mobile__marreContainer'>
        <Image loading="lazy"
          src='./src/img/marre.png'
          webp='./src/img/marre.webp'
          alt='Marre'
          className='marre'
        />
        <Image loading="lazy"
          src='./src/img/plant_01.png'
          webp='./src/img/plant_01.webp'
          alt='Plante de la marre'
          className='plante__mobile'
        />
        <button
          onClick={handleSecondEgg}
          className={
            eggs[1].found ? "eggButton discover second" : "eggButton second"
          }
        >
          <Image loading="lazy"
            src='./src/img/egg-deux.png'
            webp='./src/img/egg-deux.webp'
            alt='Premier oeuf'
            className='secondEgg'
          />
        </button>
      </div>
      <div className='treeTwo__mobile' data-atropos-offset='-6'>
        <Image loading="lazy"
          src='./src/img/tree_02.png'
          webp='./src/img/tree_02.webp'
          alt='Arbre avec balançoir'
          className='treeTwo__img'
        />
        <button
          onClick={handleSixEgg}
          className={eggs[5].found ? "eggButton discover six" : "eggButton six"}
        >
          <Image loading="lazy"
            src='./src/img/egg-six.png'
            webp='./src/img/egg-six.webp'
            alt='Premier oeuf'
            className='sixEgg'
          />
        </button>
      </div>
      <div className='poulaillerContainer__mobile' data-atropos-offset='-9'>
        <Image loading="lazy"
          src='./src/img/cabane_02.png'
          webp='./src/img/cabane_02.webp'
          alt='Poulailler bleu'
          className='poulailler'
        />
        <button
          onClick={handleThirdEgg}
          className={
            eggs[2].found ? "eggButton discover third" : "eggButton third"
          }
        >
          <Image loading="lazy"
            src='./src/img/egg-trois.png'
            webp='./src/img/egg-trois.webp'
            alt='Premier oeuf'
            className='thirdEgg'
          />
        </button>
      </div>
      <div className='tenteContainer__mobile'>
        <Image loading="lazy"
          src='./src/img/tente.png'
          webp='./src/img/tente.webp'
          alt='tente'
          className='tente'
          data-atropos-offset='8'
        />
        <button
          onClick={handleFourthEgg}
          className={
            eggs[3].found ? "eggButton discover fourth" : "eggButton fourth"
          }
        >
          <Image loading="lazy"
            src='./src/img/egg-quatre.png'
            webp='./src/img/egg-quatre.webp'
            alt='Premier oeuf'
            className='fourthEgg'
          />
        </button>
      </div>
      <div className='mobile__treeTroisContainer' data-atropos-offset='0'>
        <Image loading="lazy"
          src='./src/img/tree_03.png'
          webp='./src/img/tree_03.webp'
          alt='Arbre à droite de la cabane'
          className='treeTrois'
        />
        <Image loading="lazy"
          src='./src/img/nid.png'
          webp='./src/img/nid.webp'
          alt="Nid d'oiseau dans l'arbre"
          className='nid'
        />
        <Image loading="lazy"
          src='./src/img/fanions_02.png'
          webp='./src/img/fanions_02.webp'
          alt="Fanion reliant l'arbre au nid d'oiseau et l'abre à la cabane"
          className='fanions'
        />
        <button
          onClick={handleFifthEgg}
          className={
            eggs[4].found ? "eggButton discover fifth" : "eggButton fifth"
          }
        >
          <Image loading="lazy"
            src='./src/img/egg-cinq.png'
            webp='./src/img/egg-cinq.webp'
            alt='Premier oeuf'
            className='fifthEgg'
          />
        </button>
      </div>
    </div>
  );
};

export default MobileGameBoard;
