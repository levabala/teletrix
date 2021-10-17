import type { Component, JSX } from "solid-js";

import styles from "./Header.module.scss";

interface HeaderProps {
  actionLeft?: JSX.Element;
  actionRight?: JSX.Element;
  content?: JSX.Element;
}

export const Header: Component<HeaderProps> = (props) => {
  return (
    <header class={styles.Header}>
      <div class={styles.actionLeft}>{props.actionLeft}</div>
      <div class={styles.content}>{props.content}</div>
      <div class={styles.actionRightmenuIconmenuIcon}>{props.actionRight}</div>
    </header>
  );
};
