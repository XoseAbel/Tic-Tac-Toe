import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { ApiError } from '../../api/throwErrors/ApiError';
import {
  startGame,
  position,
  updateBoard,
  errorApi,
  figure,
} from '../../redux/gameStatus/gameStatusSlice';
import {
  selectGameId,
  selectPosition,
  selectFigure,
  selectState,
} from '../../redux/gameStatus/selectors';
import { makeid, flipCoin, handleCPUFirstMove } from './utils.startGame';

const useStyles = createUseStyles({
  button: {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#5a4e4e',
    fontFamily: 'BlackHouse',
    fontSize: '30px',
    color: '#ecdfdf',
    margin: '0px 5px 10px 5px',
    '&:disabled': {
      color: '#5a4e4e',
      backgroundColor: '#ecdfdf',
      cursor: 'not-allowed',
    },
  },
});

const ButtonGame = () => {
  const classes = useStyles();
  const dispacth = useDispatch();
  const [disablePos, setDisablePos] = useState(false);
  const [disableFig, setDisableFig] = useState(false);

  //select data from REDUX
  const startGameId = useSelector(selectGameId);
  let startPosition = useSelector(selectPosition);
  let startFigure = useSelector(selectFigure);
  const state = useSelector(selectState);

  const createNewGame = () => {
    dispacth(startGame(makeid()));
    setDisablePos(false);
    setDisableFig(false);
  };

  //handle the position about the new game
  const handlePosition = async () => {
    const randomPosition = flipCoin() ? 'Second' : 'First';
    dispacth(position(randomPosition));
    setDisablePos(true);
    // aply machine rules
    if (randomPosition === 'Second') {
      const randomFig = flipCoin() ? 'X' : 'O';
      dispacth(figure(randomFig));
      setDisableFig(true);
      try {
        const nextBoard = await handleCPUFirstMove({
          ...state,
          figure: randomFig,
          position: randomPosition,
        });
        console.log(nextBoard);
        dispacth(updateBoard(nextBoard));
      } catch (error) {
        dispacth(errorApi(new ApiError(500)));
      }
    }
  };

  //handle figure about the new game
  const handleFigure = (value: string) => {
    dispacth(figure(value));
    setDisableFig(true);
  };

  return (
    <>
      <button className={classes.button} onClick={createNewGame}>
        Start New Game
      </button>
      <div>
        {startGameId && (
          <button
            className={classes.button}
            disabled={disablePos}
            onClick={handlePosition}
          >
            {startPosition || 'Position'}
          </button>
        )}
        {startPosition && (
          <>
            {startFigure !== 'O' && (
              <button
                disabled={disableFig}
                className={classes.button}
                onClick={() => handleFigure('X')}
              >
                X
              </button>
            )}
            {startFigure !== 'X' && (
              <button
                disabled={disableFig}
                className={classes.button}
                onClick={() => handleFigure('O')}
              >
                O
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};
export { ButtonGame };
