import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Rockets.module.css';
import { getRockets, bookRockets, cancelRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets(rockets));
  }, [dispatch]);

  return (
    rockets.map((racket) => (
      <div key={racket.id}>
        <div className={style.rocketContainer}>
          <div className={style.image}>
            <img src={racket.flickr_images[0]} alt="racket" />
          </div>
          <div className={style.content}>
            {' '}
            <h3 className={style.rocketName}>
              {racket.name }
            </h3>

            <p className={style.rocketDec}>
              {racket.reserved && (
                <span className={style.badges}> Reserved</span>
              )}
              {racket.description}
            </p>
            {racket.reserved ? (
              <button type="button" className={style.cancel} onClick={() => dispatch(cancelRockets(racket.id))}>Cancel Reservation</button>
            ) : (
              <button type="button" className={style.reserve} onClick={() => dispatch(bookRockets(racket.id))}>Reserve Rocket</button>
            )}
          </div>
        </div>
      </div>
    ))

  );
};

export default Rockets;
