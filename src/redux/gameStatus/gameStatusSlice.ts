import { createSlice } from '@reduxjs/toolkit';

interface statusInterface {
  matchId: string;
  boardState: string[];
  position: string;
  figure: string;
  nextMove: any;
  error: string;
}

export const gameStatusSlice = createSlice({
  //identificador de nuestro feature, si hubiese varios actions se discriminan por el name
  name: 'gameStatus',
  initialState: {
    matchId: '',
    boardState: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
    position: '',
    figure: '',
    nextMove: null,
    error: '',
  } as statusInterface,
  //reducer que tienen definidas todas las actions
  reducers: {
    startGame: (state, action) => {
      state.matchId = action.payload;
      state.boardState = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
      state.position = '';
      state.figure = '';
    },
    position: (state, action) => {
      state.position = action.payload;
    },
    figure: (state, action) => {
      state.figure = action.payload;
    },
    nextMove: (state, action) => {
      state.nextMove = {
        char: state.figure,
        position: action.payload,
      };
    },
    updateBoard: (state, action) => {
      state.boardState = action.payload;
    },
    errorApi: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  startGame,
  position,
  updateBoard,
  errorApi,
  figure,
  nextMove,
} = gameStatusSlice.actions;

export default gameStatusSlice.reducer;
