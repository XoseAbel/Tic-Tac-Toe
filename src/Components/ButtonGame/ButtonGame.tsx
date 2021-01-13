import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { startGame } from '../../redux/gameStatus/gameStatusSlice';

const useStyles = createUseStyles({
  button: {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#5a4e4e',
    fontFamily: 'BlackHouse',
    fontSize: '30px',
    color: '#ecdfdf',
  },
});
const ButtonGame = () => {
  const classes = useStyles();
  const dispacth = useDispatch();

  const makeid = useCallback(() => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }, []);

  const createNewGame = () => {
    dispacth(startGame(makeid()));
  };

  return (
    <button className={classes.button} onClick={createNewGame}>
      Start New Game
    </button>
  );
};
export { ButtonGame };
