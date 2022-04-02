import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";
import { useDispatch, useSelector } from "react-redux";
import { setNewGame, setScore } from "../../reduxToolkit/reducers/reducerGame";
import Board from "./Board";
import "./game.css";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

function Game() {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.reducerGame);
  const [howGame, setHowGame] = useState(false);
  let sc = JSON.parse(localStorage.getItem("score"));

  useEffect(() => {
    dispatch(setScore(+sc));
  }, []);

  return (
    <>
      {howGame ? (
        <div className="howGameContainer1">
          <div className="howGameContainer">
            <div className="modal-header">
              <span></span>
              <span>
                <FormattedMessage id="howtoplay" />
              </span>
              <span className="x" onClick={() => setHowGame((prev) => !prev)}>
                x
              </span>
            </div>
            <div className="modal-body">
              <p>
                <FormattedMessage id="howtoplay1" />
              </p>
              <p>
                <FormattedMessage id="howtoplay2" />
              </p>
              <p>
                <FormattedMessage id="howtoplay3" />
              </p>
              <p>
                <FormattedMessage id="howtoplay4" />
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="game">
        <div className="newGame">
          <p className="howGame" onClick={() => setHowGame((prev) => !prev)}>
            <span>
              <FormattedMessage id="howtoplay" />
            </span>
            <HelpIcon style={{ width: "5vmin" }} />
          </p>
          <p>
            <Button
              variant="contained"
              className="but"
              onClick={() => {
                localStorage.removeItem("2048");
                let start2048 = localStorage.getItem("2048start");
                localStorage.setItem("2048", start2048);
                dispatch(setNewGame());
                localStorage.setItem("score", JSON.stringify(0));
              }}>
              <FormattedMessage id="newGame" />
            </Button>
          </p>
        </div>
        <Board />
        <p className="score">
          <span>
            <FormattedMessage id="score" />
          </span>
          <span>{score}</span>
        </p>
      </div>
    </>
  );
}

export default Game;
