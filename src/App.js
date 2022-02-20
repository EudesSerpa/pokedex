import { Link, Route, Switch } from "wouter";

import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pokemon/:id" component={Detail} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
