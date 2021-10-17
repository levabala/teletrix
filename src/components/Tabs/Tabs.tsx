import { children, Component, createEffect, JSX, splitProps } from "solid-js";
import { mergeClasses } from "../../utils/solid";
import styles from "./Tabs.module.scss";

interface TabsProps {
  keySelected?: string;
  onChange: (key: string) => void;
  children: JSX.Element[];
}

// TODO: refactor createEffect
export const Tabs: Component<TabsProps> = (props) => {
  const c = children(() => props.children);

  createEffect(() => {
    const childrenList = c() as HTMLElement | HTMLElement[];

    if (childrenList) {
      const processor = (item: HTMLElement) => {
        const { key } = item.dataset;

        if (!key) {
          throw new Error("No key found for the element");
        }

        const isSelected = key === props.keySelected;
        item.onclick = () => props.onChange(key);

        if (isSelected) {
          item.classList.add(styles.selected);
        } else {
          item.classList.remove(styles.selected);
        }
      };

      if (Array.isArray(childrenList)) {
        childrenList.forEach(processor);
      } else processor(childrenList);
    }
  });

  return <div class={styles.Tabs}>{c}</div>;
};

interface TabProps extends JSX.ButtonHTMLAttributes<HTMLDivElement> {
  key: string;
}

// TODO: #23 handle tabs overflow (scroll?)
// TODO: #24 add selectionPanel animation
export const Tab: Component<TabProps> = (props) => {
  const { classList } = mergeClasses(props);

  const [local, others] = splitProps(props, ["key"]);

  return (
    <div
      data-key={local.key}
      {...others}
      classList={{ [styles.Tab]: true, ...classList }}
    >
      <div class={styles.content}>{props.children}</div>
      <div class={styles.selectionPanel} />
    </div>
  );
};

interface TabTextProps extends TabProps {
  label: string;
  children?: never;
}

export const TabText: Component<TabTextProps> = (props) => {
  return (
    <Tab key={props.key} class={styles.text}>
      {props.label}
    </Tab>
  );
};
