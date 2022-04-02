import { createSlice } from "@reduxjs/toolkit";

function createCells() {
  const emptyArr = [];
  for (let i = 0; i < 4 * 4; i++)
    emptyArr.push({
      x: i % 4,
      y: Math.floor(i / 4),
      value: null,
      idn: i,
    });
  emptyArr[4].value = 2;
  return emptyArr;
}

const initialState = {
  gridSize: 4,
  cellSize: 20,
  cellGap: 2,
  cells: createCells(),
  canMoveLeft: true,
  canMoveRight: true,
  canMoveUp: true,
  canMoveDown: true,
  newGame: false,
  score: 0,
  color: 100,
  lang: ''
};

let reducerGame = createSlice({
  name: "reducerGame",
  initialState,
  reducers: {
    setCells(state, actions) {
      state.cells = actions.payload;
      
    },
    setCanMoveRight(state, actions) {
      state.canMoveRight = actions.payload;
    },
    setCanMoveLeft(state, actions) {
      state.canMoveLeft = actions.payload;
    },
    setCanMoveUp(state, actions) {
      state.canMoveUp = actions.payload;
    },
    setCanMoveDown(state, actions) {
      state.canMoveDown = actions.payload;
    },
    setNewGame(state, action) {
      state.newGame = !state.newGame;
      state.score = 0;
    },
    setScore(state, action) {
      state.score = state.score + action.payload
    },
    setColor(state, action) {
      state.color = action.payload
    },
    setLang(state, action) {
      state.lang = action.payload
    }
  },
});

export const {
  setCells,
  setCanMoveRight,
  setCanMoveLeft,
  setCanMoveUp,
  setCanMoveDown,
  setNewGame,
  setScore,
  setColor,
  setLang,
} = reducerGame.actions;
export default reducerGame.reducer;
