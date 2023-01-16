import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Rockets.module.css';
import { getDragons, cancelDragons, bookDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons(dragons));
  }, [dispatch]);

  return (
    dragons.map((dragon) => (
      <div key={dragon.id}>
        <div className={style.rocketContainer}>
          <div className={style.image}>
            <img src={dragon.flickr_images[0]} alt="dragon" />
          </div>
          <div className={style.content}>
            <h3 className={style.rocketName}>
              {dragon.name }
            </h3>
            <p className={style.rocketDec}>
              {dragon.reserved && (
                <span className={style.badges}>Reserved</span>
              )}
              {dragon.description}
            </p>
            {dragon.reserved ? (
              <button type="button" className={style.cancel} onClick={() => dispatch(cancelDragons(dragon.id))}>Cancel Reservation</button>
            ) : (
              <button type="button" className={style.reserve} onClick={() => dispatch(bookDragons(dragon.id))}>Reserve  Dragon</button>
            )}
          </div>
        </div>
      </div>
    ))
  );
};

export default Dragons;
