import { cx } from "@emotion/css";
import { Component, JSX, splitProps } from "solid-js";
import styles from "./Button.module.scss";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

// TODO: add variants
// TODO: add hover/active
export const Button: Component<ButtonProps> = (props) => {
  const [local, propsOther] = splitProps(props, ["class"]);

  return (
    <button {...propsOther} class={cx(styles.Button, local.class)} /> // children prop is passed as well
  );
};
