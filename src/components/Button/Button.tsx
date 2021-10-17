import { Component, JSX } from "solid-js";
import styles from "./Button.module.scss";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

// TODO: add variants
// TODO: add hover/active
// TODO: add classes merging
export const Button: Component<ButtonProps> = (props) => (
  <button class={styles.Button} {...props} /> // children prop is passed as well
);
