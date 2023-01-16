import React from 'react';
import Dragon from './DragonsProfile';
import style from './Profile.module.css';
import Rocket from './RacketProfile';
import Mission from './MissionProfile';

const Profile = () => (
  <div className={style.container}>
    <div>
      <h2>my missions</h2>
      <Mission />
    </div>
    <div>
      <h2>my rockets</h2>
      <Rocket />
    </div>
    <div>
      <h2>my dragons</h2>
      <Dragon />
    </div>
  </div>
);

export default Profile;
