import React from 'react';
import Image from 'react-image-webp';

const EggsCounter = ({ eggs, isMobile }) => {
    return (
        <footer className={ isMobile ? 'mobile__footer' : '' }>
            {eggs.map(egg => (
                <Image loading="lazy" webp={`./src/img/${egg.webpUrl}`} src={`./src/img/${egg.url}`} alt="Oeuf de pâques" key={egg.id} className={ egg.found ? 'discover' : '' } />
            ))}
        </footer>
    );
};

export default EggsCounter;