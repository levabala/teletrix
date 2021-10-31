import { PropsWithChildren } from "solid-js";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: PropsWithChildren) => (
  <div class={styles.Layout}>{children}</div>
);

Layout.Header = ({ children }: PropsWithChildren) => (
  <div class={styles.header}>{children}</div>
);
Layout.Content = ({ children }: PropsWithChildren) => (
  <div class={styles.content}>{children}</div>
);
