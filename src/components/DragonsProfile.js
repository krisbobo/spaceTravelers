import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Dragon = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const [raserved, setRaserved] = useState([]);
  useEffect(() => {
    setRaserved(() => dragons.filter((racket) => racket.reserved === true));
  }, [dragons]);
  return (
    <ul>
      { raserved.length === 0
        ? (<span> No Reserved Dragon!</span>)
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

export default Dragon;
