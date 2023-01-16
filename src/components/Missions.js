import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { getMissions, joinMissions, exitMissions } from '../redux/missions/missions';
import style from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  useEffect(() => {
    dispatch(getMissions(missions));
  }, [dispatch]);

  const handleJoin = (missionId) => {
    dispatch(joinMissions(missionId));
  };

  const handleExit = (missionId) => {
    dispatch(exitMissions(missionId));
  };

  return (
    <TableContainer>
      <Table className={style.missionTable}>
        <TableHead>
          <TableRow>
            <TableCell className={style.missionName}>Mission</TableCell>
            <TableCell className={style.description}>Description</TableCell>
            <TableCell className={style.missionStatus}>Status</TableCell>
            <TableCell className={style.membership} />
          </TableRow>
        </TableHead>
        <TableBody>
          {missions.map((mission) => (
            <TableRow key={mission.mission_id}>
              <TableCell className={style.missionName}>{mission.mission_name}</TableCell>
              <TableCell className={style.descriptionText}>{mission.description}</TableCell>
              <TableCell className={style.missionStatus}>
                {
                mission.reserved ? (<button disabled type="button" className={style.statusBtnActive}>ACTIVE MEMBER</button>)
                  : (<button disabled type="button" className={style.statusBtn}>NOT A MEMBER</button>)
                }
              </TableCell>
              <TableCell className={style.membership}>
                {
                mission.reserved ? (<button type="button" className={style.membershipBtnExit} onClick={() => handleExit(mission.mission_id)}>Leave Mission</button>)
                  : (<button type="button" className={style.membershipBtn} onClick={() => handleJoin(mission.mission_id)}>Join Mission</button>)
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Missions;
