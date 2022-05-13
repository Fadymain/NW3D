import React from 'react';
import "./Player.css";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Player = () => {

  const { state: currentlyPlaying } = useLocation();

  return (
    <>
      <div>
        <video autoPlay controls className="videoPlayeer">
          <source
            src={currentlyPlaying}
            type="video/mp4"
          >
          </source>
        </video>
      </div>
    </>
  )
}

export default Player;
