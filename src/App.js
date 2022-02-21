import { Route, Switch } from "wouter";
import { PokemonsContextProvider } from "context/PokemonsContext";

import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <PokemonsContextProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/pokemon/:id" component={Detail} />
          </Switch>
        </PokemonsContextProvider>
      </section>
    </div>
  );
}

export default App;
