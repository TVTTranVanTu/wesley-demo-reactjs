import React from "react";
import "./scss/main.scss";
import routes from "./router/routerConfix";
import Router from "./router/Router";
import Header from "./components/Header";

const App: React.FC = () => {
  console.log(routes);

  return (
    <div>
      <Header />
      <Router routes={routes} />
    </div>
  );
};

export default App;
