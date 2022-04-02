/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCells,
  setCanMoveRight,
  setCanMoveLeft,
  setCanMoveUp,
  setCanMoveDown,
  setNewGame,
  setScore,
} from "../../reduxToolkit/reducers/reducerGame";
import "./game.css";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";

function Logic() {
  const dispatch = useDispatch();
  const [l, setL] = useState("");
  const [r, setR] = useState("");
  const [d, setD] = useState("");
  const [u, setU] = useState("");
  const {
    cells,
    canMoveLeft,
    canMoveRight,
    canMoveUp,
    canMoveDown,
    score,
    color,
  } = useSelector((state) => state.reducerGame);
  const createRndTile = (num) => Math.floor(Math.random() * num);
  const cells2 = JSON.parse(JSON.stringify(cells)).sort((a, b) => a.y - b.y);

  const isNull = cells2.filter((i) => i.value === null);

  const win = cells2.some((i) => i.value === 2048);

  const gameOver = () =>
    JSON.stringify(r) === JSON.stringify(l) &&
    JSON.stringify(u) === JSON.stringify(d);

  const createRandomTile = (arr) => {
    const isNull = JSON.parse(JSON.stringify(arr)).filter(
      (i) => i.value === null,
    );
    const id = createRndTile(isNull.length - 1);
    let randomObj;
    if (isNull.length) {
      randomObj = isNull[id];
    }
    return arr.map((i) => {
      if (isNull.length > 0 && randomObj.x === i.x && randomObj.y === i.y) {
        i.value = 2;
        return i;
      }
      return i;
    });
  };

  const canMerge = (old_arr, merge_arr) => {
    let a = JSON.stringify(old_arr);
    let b = JSON.stringify(merge_arr);
    return a === b;
  };

  const move = (arr_byColumn, x_y, a_b) => {
    let arr = arr_byColumn.map((item) => {
      return item.sort((a, b) => {
        let var1, var2;
        if (a_b === "a") {
          var1 = a.value;
          var2 = b.value;
        } else if (a_b === "b") {
          var1 = b.value;
          var2 = a.value;
        }
        if (var1) return 1;
        if (var2) return -1;
        return 0;
      });
    });
    return arr.map((item, index) => {
      return item.map((itm, ind, array) => {
        if (x_y === "y") {
          itm.y = ind;
        } else if (x_y === "x") {
          itm.x = ind;
        }
        return itm;
      });
    });
  };

  const merge = (arr, reverse = false) => {
    arr.__proto__.mergeItems = function () {
      return this.map((item, index, array) => {
        if (array[index + 1] !== undefined) {
          if (array[index + 1].value === item.value && item.value !== null) {
            item.value = item.value + item.value;
            array[index + 1].value = null;
            dispatch(setScore(item.value));
            localStorage.setItem("score", JSON.stringify(score + item.value));
          }
          return item;
        }
        return item;
      });
    };
    if (reverse) {
      return JSON.parse(JSON.stringify(arr)).map((arr) => {
        return arr.reverse().mergeItems().reverse();
      });
    }
    return JSON.parse(JSON.stringify(arr)).map((arr) => {
      return arr.mergeItems();
    });
  };

  const cellsByRow = () =>
    cells2.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || [];
      cellGrid[cell.y][cell.x] = cell;
      return cellGrid;
    }, []);
  const cellsByColumn = () =>
    cells2.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, []);
  
  function handler(e) {
    if (!isNull.length && gameOver()) {
      console.log("Game over");
    } else {
      switch (e.key) {
        case "ArrowDown":
          const newArr4 = move(cellsByColumn(), "y", "a");
          const merge_newArr4 = merge(newArr4, true);
          const end_arr4 = move(merge_newArr4, "y", "a").flat(1);

          setD(cells2.sort((a, b) => a.y - b.y));

          if (canMerge(cells2, end_arr4)) {
            dispatch(setCanMoveDown(true));
          } else {
            const end_arr4_rnd = createRandomTile(end_arr4);
            if (canMoveDown) {
              dispatch(setCanMoveDown(true));
              dispatch(setCells(end_arr4));
              localStorage.setItem("2048", JSON.stringify(end_arr4));
            } else {
              dispatch(setCanMoveDown(false));
              dispatch(setCells(end_arr4_rnd));
              localStorage.setItem("2048", JSON.stringify(end_arr4_rnd));
            }
          }
          return;
        case "ArrowUp": 
          let newArr3 = move(cellsByColumn(), "y", "b");
          let merge_newArr3 = merge(newArr3, false);
          let end_arr3 = move(merge_newArr3, "y", "b").flat(1);

          setU(cells2.sort((a, b) => a.y - b.y));

          if (canMerge(cells2, end_arr3)) {
            dispatch(setCanMoveUp(true));
          } else {
            const end_arr3_rnd = createRandomTile(end_arr3);
            if (canMoveUp) {
              dispatch(setCanMoveUp(true));
              dispatch(setCells(end_arr3));
              localStorage.setItem("2048", JSON.stringify(end_arr3));
            } else {
              dispatch(setCanMoveUp(false));
              dispatch(setCells(end_arr3_rnd));
              localStorage.setItem("2048", JSON.stringify(end_arr3_rnd));
            }
          }
          return;
        case "ArrowRight": 
          let newArr2 = move(cellsByRow(), "x", "a");
          let merge_newArr2 = merge(newArr2, true);
          let end_arr2 = move(merge_newArr2, "x", "a").flat(1);

          setR(cells2.sort((a, b) => a.y - b.y));

          if (canMerge(cells2, end_arr2)) {
            dispatch(setCanMoveRight(true));
          } else {
            const end_arr2_rnd = createRandomTile(end_arr2);
            if (canMoveRight) {
              dispatch(setCanMoveRight(true));
              dispatch(setCells(end_arr2));
              localStorage.setItem("2048", JSON.stringify(end_arr2));
            } else {
              dispatch(setCanMoveRight(false));
              dispatch(setCells(end_arr2_rnd));
              localStorage.setItem("2048", JSON.stringify(end_arr2_rnd));
            }
          }
          return;
        case "ArrowLeft": 
          let newArr = move(cellsByRow(), "x", "b");
          let merge_newArr = merge(newArr, false);
          let end_arr = move(merge_newArr, "x", "b").flat(1);

          setL(cells2.sort((a, b) => a.y - b.y));

          if (canMerge(cells2, end_arr)) {
            dispatch(setCanMoveLeft(true));
          } else {
            const end_arr_rnd = createRandomTile(end_arr);
            if (canMoveLeft) {
              dispatch(setCanMoveLeft(true));
              dispatch(setCells(end_arr));
              localStorage.setItem("2048", JSON.stringify(end_arr));
            } else {
              dispatch(setCanMoveLeft(false));
              dispatch(setCells(end_arr_rnd));
              localStorage.setItem("2048", JSON.stringify(end_arr_rnd));
            }
          }
          return;
        default:
          return "other key";
      }
    }
  }

  const click_NewGame = () => {
    localStorage.removeItem("2048");
    let start2048 = localStorage.getItem("2048start");
    localStorage.setItem("2048", start2048);
    dispatch(setNewGame());
    localStorage.setItem("score", JSON.stringify(0));
  };


  useEffect(() => {
    window.addEventListener("keydown", win ? null : handler);
    return () => window.removeEventListener("keydown", win ? null : handler);
  }, [cells]);
  return (
    <>
      {cells2.map((item, index) => {
        const bg_lightness = 100 - Math.log2(item.value) * 9;
        const text_lightness = bg_lightness <= 50 ? 90 : 10;
        return (
          <div
            key={index}
            className="tile"
            style={{
              "--x": item.x,
              "--y": item.y,
              "--background-lightness": `${bg_lightness}%`,
              "--text-lightness": `${text_lightness}%`,
              "--background-color": color,
            }}>
            {item.value !== null ? item.value : ""}
          </div>
        );
      })}
      {win ? (
        <div className="win">
          <p>
            <FormattedMessage id="youwin" />
          </p>
          <span>Score {score}</span>
          <Button variant="contained" className="but" onClick={click_NewGame}>
            <FormattedMessage id="newGame" />
          </Button>
        </div>
      ) : null}
      {!isNull.length && gameOver() ? (
        <div className="win">
          <p>
            <FormattedMessage id="gameover" />
          </p>
          <p>Score {score}</p>
          <Button variant="contained" className="but" onClick={click_NewGame}>
            <FormattedMessage id="newGame" />
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default Logic;
