import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  textArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: 0,
  },
});

const TitleArea = () => {
  const classes = useStyles();
  return (
    <span className={classes.textArea}>
      <h1 className={classes.title}>Tic Tac Toe</h1>
      <p>Aqui va la descripcion del juego</p>
    </span>
  );
};
export { TitleArea };
