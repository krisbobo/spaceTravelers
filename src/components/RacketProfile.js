import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const [raserved, setRaserved] = useState([]);

  useEffect(() => {
    setRaserved(() => rockets.filter((racket) => racket.reserved === true));
  }, [rockets]);
  return (
    <ul>
      { raserved.length === 0
        ? (<span> No Reserved Rocket!</span>)
        : (
          raserved.map((racket) => (
            <li key={racket.id}>
              <span>
                {racket.name}
              </span>
            </li>
          ))
        )}
    </ul>
  );
};

export default Rocket;
