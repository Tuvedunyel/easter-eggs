import { useState } from "react";
import { useEffect } from "react";
import Accueil from "./components/Accueil";
import EggsCounter from "./components/EggsCounter";
import FinalScreen from "./components/FinalScreen";
import GameBoard from "./components/GameBoard";
import MobileGameBoard from "./components/MobileGameBoard";
import "./sass/style.scss";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const eggsNumber = 6;
  const [eggsFound, setEggsFound] = useState(0);
  const [eggs, setEggs] = useState([
    {
      id: 1,
      webpUrl: "egg-un.webp",
      url: "egg-un.png",
      found: false,
    },
    {
      id: 2,
      webpUrl: "egg-deux.webp",
      url: "egg-deux.png",
      found: false,
    },
    {
      id: 3,
      webpUrl: "egg-trois.webp",
      url: "egg-trois.png",
      found: false,
    },
    {
      id: 4,
      webpUrl: "egg-quatre.webp",
      url: "egg-quatre.png",
      found: false,
    },
    {
      id: 5,
      webpUrl: "egg-cinq.webp",
      url: "egg-cinq.png",
      found: false,
    },
    {
      id: 6,
      webpUrl: "egg-six.webp",
      url: "egg-six.png",
      found: false,
    },
  ]);

  useEffect(() => {
    let windowWidth = window.innerWidth;

    if (windowWidth <= 1081) {
      setIsMobile(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (eggsFound === eggsNumber) {
      setTimeout(() => {
        setGameComplete(true);
      }, 3000);
    }
  }, [eggsFound]);

  return (
    <div
      className={
        isPlaying
          ? gameComplete
            ? "componentsContainer finishScreen"
            : "componentsContainer"
          : "componentsContainer notplayed"
      }
    >
      {isMobile ? (
        <>
          <MobileGameBoard
            setEggsFound={setEggsFound}
            eggs={eggs}
            setEggs={setEggs}
            eggsFound={eggsFound}
            gameComplete={gameComplete}
          />
          <EggsCounter isMobile={isMobile} eggs={eggs} />
          {!isPlaying && (
            <Accueil setIsPlaying={setIsPlaying} isMobile={isMobile} />
          )}
          {gameComplete && <FinalScreen />}
        </>
      ) : (
        <>
          <GameBoard
            setEggsFound={setEggsFound}
            eggs={eggs}
            setEggs={setEggs}
            eggsFound={eggsFound}
            isPlaying={isPlaying}
            gameComplete={gameComplete}
          />
          <EggsCounter eggs={eggs} />
          {!isPlaying && <Accueil setIsPlaying={setIsPlaying} />}
          {gameComplete && <FinalScreen isMobile={isMobile} />}
        </>
      )}
    </div>
  );
}

export default App;
