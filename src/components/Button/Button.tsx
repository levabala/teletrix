import { Component, createEffect, JSX } from "solid-js";
import { mergeClasses } from "../../utils/solid";
import styles from "./Button.module.scss";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

// TODO: add variants
// TODO: add hover/active
export const Button: Component<ButtonProps> = (props) => {
  const { classList } = mergeClasses(props);

  createEffect(() => console.log(classList));

  return (
    <button
      classList={{
        [styles.Button]: true,
        ...classList,
      }}
      {...props}
    /> // children prop is passed as well
  );
};
