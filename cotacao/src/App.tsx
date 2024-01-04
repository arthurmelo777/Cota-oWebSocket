import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/BR"
            element={
              <CountryPage
                bandeira={"https://flagcdn.com/w2560/br.png"}
                nome={"Brasil"}
                moeda="Real"
                moedasParse={["USD", "RUB", "EUR", "GBP", "ARS"]}
                nomeMoedasParse={[
                  "Dolar(es)",
                  "Rublo(s)",
                  "Euro(s)",
                  "Libra(s)",
                  "Peso(s)",
                ]}
                code="BRL"
              />
            }
          ></Route>
          <Route
            path="/US"
            element={
              <CountryPage
                bandeira={"https://flagcdn.com/w2560/us.png"}
                nome={"Estados Unidos"}
                moeda="Dolar"
                moedasParse={["BRL", "RUB", "EUR", "GBP", "ARS"]}
                nomeMoedasParse={[
                  "Real(is)",
                  "Rublo(s)",
                  "Euro(s)",
                  "Libra(s)",
                  "Peso(s)",
                ]}
                code="USD"
              />
            }
          ></Route>
          <Route
            path="/RU"
            element={
              <CountryPage
                bandeira={"https://flagcdn.com/w2560/ru.png"}
                nome={"Russia"}
                moeda="Rublo Russo"
                moedasParse={["USD", "BRL", "EUR", "GBP", "ARS"]}
                nomeMoedasParse={[
                  "Dolar(es)",
                  "Real(is)",
                  "Euro(s)",
                  "Libra(s)",
                  "Peso(s)",
                ]}
                code="RUB"
              />
            }
          ></Route>
          <Route
            path="/IT"
            element={
              <CountryPage
                bandeira={"https://flagcdn.com/w2560/it.png"}
                nome={"Italia"}
                moeda="Euro"
                moedasParse={["USD", "RUB", "BRL", "GBP", "ARS"]}
                nomeMoedasParse={[
                  "Dolar(es)",
                  "Rublo(s)",
                  "Real(is)",
                  "Libra(s)",
                  "Peso(s)",
                ]}
                code="EUR"
              />
            }
          ></Route>
          <Route
            path="/GB"
            element={
              <CountryPage
                bandeira={"https://flagcdn.com/w2560/gb-eng.png"}
                nome={"Inglaterra"}
                moeda="Libra esterlina"
                moedasParse={["USD", "RUB", "EUR", "BRL", "ARS"]}
                nomeMoedasParse={[
                  "Dolar(es)",
                  "Rublo(s)",
                  "Euro(s)",
                  "Real(is)",
                  "Peso(s)",
                ]}
                code="GBP"
              />
            }
          ></Route>
          <Route
            path="/AR"
            element={
              <CountryPage
                bandeira={"https://flagcdn.com/w2560/ar.png"}
                nome={"Argentina"}
                moeda="Peso Argentino"
                moedasParse={["USD", "RUB", "EUR", "GBP", "BRL"]}
                nomeMoedasParse={[
                  "Dolar(es)",
                  "Rublo(s)",
                  "Euro(s)",
                  "Libra(s)",
                  "Real(is)",
                ]}
                code="ARS"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
