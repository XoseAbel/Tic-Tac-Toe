import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import backImg from './backImg.jpg';
import { PrintIcon } from './PrintIcon';
import {
  selectFigure,
  selectGameId,
  selectIcons,
  selectPosition,
} from '../../redux/gameStatus/selectors';

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
  const id = useSelector(selectGameId);
  const figure = useSelector(selectFigure);
  const position = useSelector(selectPosition);

  return (
    id &&
    figure &&
    position && (
      <div className={classes.gridArea}>
        {icons.map((icon: string, index: number) => (
          <PrintIcon key={`${index}-icon`} icon={icon} index={index} />
        ))}
      </div>
    )
  );
};
export { PlayArea };
