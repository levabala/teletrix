import { Component, JSX, mergeProps, splitProps } from "solid-js";
import { Size } from "../../styles";
import { mergeClasses } from "../../utils/solid";
import { Button, ButtonProps } from "../Button";
import styles from "./IconButton.module.scss";

interface IconButtonProps extends ButtonProps {
  icon: JSX.Element;
  size?: Size;
  children?: never; // to restrict children for the component
}

export const IconButton: Component<IconButtonProps> = (propsRaw) => {
  // TODO: #16 remove force cast for mergeProps (need custom typings?)
  const props = mergeProps({ size: Size.Medium }, propsRaw) as IconButtonProps;
  const [local, propsOther] = splitProps(props, ["icon", "size"]);
  const { classList } = mergeClasses(props);

  return (
    <Button
      {...propsOther}
      classList={{
        [styles.IconButton]: true,
        // TODO: #17 move sizes mapping to utils
        [styles.small]: local.size === Size.Small,
        [styles.medium]: local.size === Size.Medium,
        [styles.large]: local.size === Size.Large,
        // TODO: #18 add more convenient way to merge and forward class/className/classList
        ...classList,
      }}
    >
      {local.icon}
    </Button>
  );
};
