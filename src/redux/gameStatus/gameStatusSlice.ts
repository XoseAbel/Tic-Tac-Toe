import { createSlice } from '@reduxjs/toolkit';

export const gameStatusSlice = createSlice({
  //identificador de nuestro feature, si hubiese varios actions se discriminan por el name
  name: 'gameStatus',
  initialState: {
    matchId: '',
    boardState: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  },
  //reducer que tienen definidas todas las actions
  reducers: {
    startGame: (state, action) => {
      state.matchId = action.payload;
      state.boardState = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    },
    selectCell: (state, action) => {
      state.boardState.splice(action.payload, 1, 'X');
    },
  },
});

export const { startGame, selectCell } = gameStatusSlice.actions;

export default gameStatusSlice.reducer;
