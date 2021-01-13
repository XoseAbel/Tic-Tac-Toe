import { configureStore } from '@reduxjs/toolkit';
import gameStatus from './gameStatus/gameStatusSlice';

export default configureStore({
  reducer: {
    gameStatus: gameStatus,
  },
  //desvtools habilitar
  devTools: true,
});
