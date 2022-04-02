import Game from "./components/game/Game";
import "./app.scss";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useSelector } from "react-redux";

function App() {
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
  localStorage.setItem("2048start", JSON.stringify(createCells()));
  const { lang } =  useSelector((state) => state.reducerGame);

  let locale = LOCALES.ENGLISH;

  if (lang === "ru") locale = LOCALES.RUSSIAN;
  else if (lang === "am") locale = LOCALES.ARMENIAN;
  else if (lang === "en") locale = LOCALES.ENGLISH;

  let gameContainer = (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={locale}
    >
      <div className="App">
        <Menu />
        <div className="game-container">
          <Game />
        </div>
      </div>
    </IntlProvider>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={gameContainer} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
