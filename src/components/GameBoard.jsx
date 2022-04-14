import React, { useEffect, useState } from "react";
import "atropos/css";
import Atropos from "atropos/react";
import Decor from "./Decor";
import Image from "react-image-webp";

const GameBoard = ({
  setEggsFound,
  eggsFound,
  eggs,
  setEggs,
  isPlaying,
  gameComplete,
}) => {
  const [eggDecrementer, setEggDecrementer] = useState(6);

  useEffect( () => {
    window.scrollTo(0, 0);
  }, [])

  const handleFirstEgg = () => {
    if (eggs[0].found === false) {
      // setEggs[0].found = true
      setEggs(eggs.map(egg => (egg.id === 1 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
      setEggDecrementer(eggDecrementer - 1);
    }
  };

  const handleSecondEgg = () => {
    if (eggs[1].found === false) {
      // setEggs[1].found = true
      setEggs(eggs.map(egg => (egg.id === 2 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
      setEggDecrementer(eggDecrementer - 1);
    }
  };

  const handleThirdEgg = () => {
    if (eggs[2].found === false) {
      // setEggs[2].found = true
      setEggs(eggs.map(egg => (egg.id === 3 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
      setEggDecrementer(eggDecrementer - 1);
    }
  };

  const handleFourthEgg = () => {
    if (eggs[3].found === false) {
      // setEggs[3].found = true
      setEggs(eggs.map(egg => (egg.id === 4 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
      setEggDecrementer(eggDecrementer - 1);
    }
  };

  const handleFifthEgg = () => {
    if (eggs[4].found === false) {
      // setEggs[4].found = true
      setEggs(eggs.map(egg => (egg.id === 5 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
      setEggDecrementer(eggDecrementer - 1);
    }
  };

  const handleSixEgg = () => {
    if (eggs[5].found === false) {
      // setEggs[5].found = true
      setEggs(eggs.map(egg => (egg.id === 6 ? { ...egg, found: true } : egg)));
      setEggsFound(eggsFound + 1);
      setEggDecrementer(eggDecrementer - 1);
    }
  };

  return (
    <div className={ gameComplete ? 'container gameboard complete' : 'container gameboard'}>
      <header>
        <img
          src='https://btg-communication.fr/wp-content/uploads/2018/11/logo-btg-encadre.svg'
          alt='BTG Communication, agence de communication à Tours'
        />
      </header>
      {isPlaying && !gameComplete && (
        <h1 className='eggCount__title'>
          il te reste encore{" "}
          <span className='eggCounter'>{eggDecrementer} { eggDecrementer > 1 ? 'oeufs' : 'oeuf'}</span>{" "}
          <span className='end__title'>à trouver</span>
        </h1>
      )}
      <Atropos
        activeOffset={1}
        shadow={false}
        rotateXMax={1}
        rotateYMax={1}
        className='my-atropos'
      >
        <section className='game-container'>
          <Image loading="lazy"
            className='background'
            src='./src/img/BG.png'
            webp='./src/img/BG.webp'
            alt='Le jardin'
          />
          <Image loading="lazy"
            src='./src/img/house.png'
            webp='./src/img/house.webp'
            alt='Maison blanche à toit bleu'
            className='house'
          />
          <div className='centerCabane' data-atropos-offset='-1'>
            <Image loading="lazy"
              src='./src/img/cabane.png'
              webp='./src/img/cabane.webp'
              alt='Cabane dans un arbre'
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
          <Decor />
          <Image loading="lazy"
            src='./src/img/toboggan.png'
            webp='./src/img/toboggan.webp'
            alt='Toboggan bleu'
            className='toboggan'
            data-atropos-offset='-5'
          />
          <div className='treeTwo' data-atropos-offset='-6'>
            <Image loading="lazy"
              src='./src/img/tree_02.png'
              webp='./src/img/tree_02.webp'
              alt='Arbre avec balançoir'
            />
            <button
              onClick={handleSixEgg}
              className={
                eggs[5].found ? "eggButton discover six" : "eggButton six"
              }
            >
              <Image loading="lazy"
                src='./src/img/egg-six.png'
                webp='./src/img/egg-six.webp'
                alt='Premier oeuf'
                className='sixEgg'
              />
            </button>
          </div>
          <Image loading="lazy"
            src='./src/img/tree_01.png'
            webp='./src/img/tree_01.webp'
            alt='Arbre avec un manchoir à oiseaux'
            className='treeOne'
            data-atropos-offset='-7'
          />

          <div className='marreContainer' data-atropos-offset='-7'>
            <Image loading="lazy"
              src='./src/img/marre.png'
              webp='./src/img/marre.webp'
              alt="Petit point d'eau"
            />
            <Image loading="lazy"
              src='./src/img/plant_01.png'
              webp='./src/img/plant_01.webp'
              alt='Plante de la marre'
              className='planteMarre'
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
          <Image loading="lazy"
            src='./src/img/arrosoir.png'
            webp='./src/img/arrosoir.webp'
            alt='Arrosoir rose'
            className='arrosoir'
            data-atropos-offset='-8'
          />
          <Image loading="lazy"
            src='./src/img/paille.png'
            webp='./src/img/paille.webp'
            alt='Tas de paille'
            className='paille'
            data-atropos-offset='-7'
          />

          <div className='poulaillerContainer' data-atropos-offset='-9'>
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

          <Image loading="lazy"
            src='./src/img/poule.png'
            webp='./src/img/poule.webp'
            alt='Poule entrain de regarder vers le ciel'
            className='poule'
            data-atropos-offset='-7'
          />
          <Image loading="lazy"
            src='./src/img/poule_02.png'
            webp='./src/img/poule_02.webp'
            alt='Poule entrain de manger des graînes'
            className='pouleDeux'
            data-atropos-offset='-7'
          />
          <div className='tenteContainer'>
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

          <div className='treeTroisContainer' data-atropos-offset='0'>
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
          <Image loading="lazy"
            src='./src/img/velo.png'
            webp='./src/img/velo.webp'
            alt="Vélo poser contre l'arbre avec le nid d'oiseau"
            className='velo'
            data-atropos-offset='3'
          />

          <Image loading="lazy"
            src='./src/img/barril.png'
            webp='./src/img/barril.webp'
            alt="Barril derrière la tente et devant l'arbre avec le vélo poser"
            className='barril'
            data-atropos-offset='7'
          />
        </section>
      </Atropos>
    </div>
  );
};

export default GameBoard;
