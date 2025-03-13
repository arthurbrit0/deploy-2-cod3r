import React from 'react';
import MovingLogos from './cards/MovingLogos';

const ImageDisplay: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -left-14 h-full">
        <MovingLogos 
          direction="down"
          height="100%"
        />
      </div>
      
      <div className="w-[300px] md:w-[600px] h-[400px] bg-[#1a1b3b] rounded-xl flex items-center justify-center">
        <div className="text-gray-400">Placeholder para o vídeo</div>
      </div>

      <div className="absolute -right-14 h-full">
        <MovingLogos 
          direction="up"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;