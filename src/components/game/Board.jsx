/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCells } from "../../reduxToolkit/reducers/reducerGame";
import Logic from "./Logic";
import "./game.css";

function Board() {
  const { gridSize, cellSize, cellGap, cells, newGame } = useSelector(
    (state) => state.reducerGame,
  );
  const dispatch = useDispatch();
  const style = {
    "--grid-size": gridSize,
    "--cell-size": `${cellSize}vmin`,
    "--cell-gap": `${cellGap}vmin`,
  };
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
  useEffect(() => {
    let locStorage = JSON.parse(localStorage.getItem("2048"))
    localStorage.setItem("2048start", JSON.stringify(createCells()));
    if (locStorage === JSON.stringify(createCells()) ) {
      dispatch(setCells(createCells()));
    } else {
      console.log(locStorage)
      if(locStorage) dispatch(setCells(locStorage));
      
    }
  }, [newGame]);
  return (
    <div style={style} id="game-board">
      {cells.map((item, index) => {
        return <div className="cell" key={index}></div>;
      })}
      <Logic />
    </div>
  );
}
export default Board;
