/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setColor, setLang } from "../reduxToolkit/reducers/reducerGame";
import { FormattedMessage } from "react-intl";

function Menu() {
  let d = localStorage.getItem('bg')
  const [bg, setBg] = useState(d);
  const [language, setLanguage] = useState("en");
  const [about, setAbout] = useState(false);
  const dispatch = useDispatch();

  const languageHandler = e => {
    setLanguage(e.target.value);
    dispatch(setLang(e.target.value));
  }
 
  useEffect(() => {
    dispatch(setColor(+bg));
    localStorage.setItem('bg' , +bg)
  }, [bg , language]);
  return (
    <>
      <div className="menu">
        <span className="logo">2048</span>
        <div className="menu-items">
          <select
            tabIndex={1}
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            label="color"
            name="color"
            className="select">
            <option className="opt opt1" value={"100"}>
              green
            </option>
            <option className="opt opt2" value={"250"}>
              purple
            </option>
            <option className="opt opt3" value={"590"}>
              blue
            </option>
            <option className="opt opt4" value={"750"}>
              brown
            </option>
          </select>
          <span>
            <select
              tabIndex={1}
              value={language}
              onChange={languageHandler}
              label="language"
              name="language"
              className="language">
              <option className="lan lan1" value={"en"}>
                english
              </option>
              <option className="lan lan2" value={"ru"}>
                русский
              </option>
              <option className="lan lan3" value={"am"}>
                հայերեն
              </option>
            </select>
          </span>
          <span onClick={() => setAbout((prev) => !prev)}>
            <FormattedMessage id="about" />
          </span>
        </div>
      </div>
      {about ? (
        <div className="about-container">
          <div className="about">
            <div className="about1">
              <span></span>
              <span>
                <FormattedMessage id="about" />
              </span>
              <span className="x" onClick={() => setAbout((prev) => !prev)}>
                x
              </span>
            </div>
            <div className="modal-body">
              <p>
                <FormattedMessage id="about1" />
              </p>
              <p>
                <FormattedMessage id="about2" />
              </p>
              <div>
                <h3>               
                  <FormattedMessage id="gameplay" />
                </h3>
                <br />
                <FormattedMessage id="about3" />
              </div>
              <p>
                <FormattedMessage id="about4" />
              </p>
              <div>
                <h3>
                  <FormattedMessage id="development" />
                </h3><br />
                <FormattedMessage id="about5" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Menu;
