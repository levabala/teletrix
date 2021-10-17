import type { JSX } from "solid-js";

type PropsWithClasses = Pick<
  JSX.ButtonHTMLAttributes<HTMLElement>,
  "class" | "className" | "classList"
>;
type ClassListObject = NonNullable<PropsWithClasses["classList"]>;

/**
 * merges passed props' class, className and classList into one classList object
 */
export const mergeClasses = (
  ...propsArray: PropsWithClasses[]
): { classList: ClassListObject } => {
  const classList: ClassListObject = {};

  const assignStaticClassName = (className: string) =>
    (classList[className] = true);

  propsArray.forEach((props) => {
    props.class?.split(" ").forEach(assignStaticClassName);
    props.className?.split(" ").forEach(assignStaticClassName);
    Object.assign(classList, props.classList);
  });

  return { classList };
};
