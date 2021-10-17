import type { Component } from "solid-js";
import styles from "./App.module.scss";
import { Header, IconButton } from "./components";

import menuIcon from "./assets/icons/menu.svg";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header
        actionLeft={
          <IconButton
            onClick={() => console.log("kek")}
            icon={<img src={menuIcon} alt="menu icon" />}
          />
        }
        content={<span>Header</span>}
      />
      <main class={styles.main} />
    </div>
  );
};

export default App;
