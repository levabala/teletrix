import { Component, createSignal } from "solid-js";
import { TabText, Tabs } from "../../components";
import styles from "./ChatList.module.scss";

export const ChatList: Component = () => {
  const [selectedTabKeyGet, selectedTabKeySet] = createSignal("All chats");

  return (
    <div class={styles.ChatList}>
      <Tabs keySelected={selectedTabKeyGet()} onChange={selectedTabKeySet}>
        <TabText key="All chats" label="All chats" />
        <TabText key="Work" label="Work" />
      </Tabs>
    </div>
  );
};
