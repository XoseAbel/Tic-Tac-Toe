import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import backImg from './backImg.jpg';
import { PrintIcon } from './PrintIcon';
import { selectIcons, selectGameId } from '../../redux/gameStatus/selectors';

const useStyles = createUseStyles({
  gridArea: {
    marginTop: 20,
    display: 'grid',
    gridTemplateRows: '100px  100px  100px',
    gridTemplateColumns: '100px  100px  100px',
    height: '300px',
    backgroundImage: `url(${backImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

const PlayArea = () => {
  const classes = useStyles();

  const icons = useSelector(selectIcons);
  const startGame = useSelector(selectGameId);

  return (
    startGame && (
      <div className={classes.gridArea}>
        {icons.map((icon: string, index: number) => (
          <PrintIcon key={`${index}-icon`} icon={icon} index={index} />
        ))}
      </div>
    )
  );
};
export { PlayArea };
