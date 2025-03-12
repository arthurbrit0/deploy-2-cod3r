import React from 'react';
import MovingLogos from './cards/MovingLogos';

interface CodeDisplayProps {
  type: 'code' | 'card';
}

const ImageDisplay: React.FC<CodeDisplayProps> = ({ type }) => {
  const height = type === 'code' ? 'h-[300px]' : 'h-[250px]';
  const width = 'w-[300px] md:w-[600px]';
  
  return (
    <div className={`relative ${type === 'code' ? 'ml-16' : 'mr-16'} flex items-start gap-6`}>
      {type === 'code' && (
        <div className="absolute -left-16 h-full">
          <MovingLogos 
            direction="down"
            height="100%"
          />
        </div>
      )}
      
      <div className={`${width} bg-[#1a1b3b] rounded-xl ${height}`}>
      </div>
      {type === 'card' && (
        <div className="absolute -right-16 h-full">
          <MovingLogos 
            direction="up"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;