import React, { useEffect } from "react";
import Image from "react-image-webp";
import Newsletter from "./Newsletter";

const FinalScreen = ({ isMobile }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={
        isMobile ? "container finalScreen mobile" : "container finalScreen"
      }
    >
      <header>
        <img
          src='https://btg-communication.fr/wp-content/uploads/2018/11/logo-btg-encadre.svg'
          alt='BTG Communication, agence de communication à Tours'
        />
      </header>
      <h1>
        <Image loading="lazy"
          src='./src/img/logo-btg.png'
          webp='./src/img/logo-btg.webp'
          alt='BTG Communication, agence de communication à 360°'
        />
        Félicitation !
      </h1>
      <strong>Tu as trouvé tous les oeufs btg communication</strong>
      <ul>
        <li id='gael'>Gaël</li>
        <li id='guillaume'>Guillaume</li>
        <li id='romain'>Romain</li>
        <li id='anais'>Anaïs</li>
        <li id='gregoire'>Grégoire</li>
        <li id='zoe'>Zoé</li>
      </ul>
      <section className='newsletter'>
        <h3>Inscription à la newsletter</h3>
        <img
          src='https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://btg-communication.fr/wp-content/themes/btg/img/icons/wave-yellow.gif'
          alt=''
        />
        <p className="newsTexte">
          Recevez tous les mois les actualités de notre agence de communication,
          des articles sur
          <strong>
            {" "}
            le marketing, la création de site internet, les bonnes pratigues,
            des guides etc.
          </strong>
        </p>
        <Newsletter />
      </section>
    </div>
  );
};

export default FinalScreen;
