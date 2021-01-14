import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { nextMove } from '../../redux/gameStatus/gameStatusSlice';

const useStyles = createUseStyles({
  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '35px',
  },
});

const PrintIcon = ({ icon, index }: any) => {
  const classes = useStyles();

  const result = icon === '-' ? '' : icon;

  const dispach = useDispatch();
  const handleCell = () => {
    if (!result) {
      dispach(nextMove(index));
    }
  };

  return (
    <span className={classes.cell} onClick={handleCell}>
      {result}
    </span>
  );
};
export { PrintIcon };
