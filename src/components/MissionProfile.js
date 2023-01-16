import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Mission = () => {
  const { missions } = useSelector((state) => state.missions);
  const [reserved, setReserved] = useState([]);
  useEffect(() => {
    setReserved(() => missions.filter((mission) => mission.reserved === true));
  }, [missions]);
  return (
    <ul>
      { reserved.length === 0
        ? (<span> No Reserved Missions!</span>)
        : (
          reserved.map((mission) => (
            <li key={mission.mission_id}>
              <span>
                {mission.mission_name}
              </span>
            </li>
          ))
        )}
    </ul>
  );
};

export default Mission;
