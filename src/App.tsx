import type { Component } from "solid-js";
import styles from "./App.module.scss";
import { Header, Button } from "./components";

import menuIcon from "./assets/icons/menu.svg";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header
        actionLeft={
          <Button onClick={() => console.log("kek")}>
            <img src={menuIcon} alt="menu icon" />
          </Button>
        }
        content={<span>Header</span>}
      />
      <main class={styles.main} />
    </div>
  );
};

export default App;
