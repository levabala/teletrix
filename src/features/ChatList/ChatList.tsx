import { Component, createSignal, For } from "solid-js";
import { TabText, Tabs, Layout } from "../../components";
import { ChatItem } from "./components";
import { sub } from "date-fns";
import { times } from "remeda";

export const ChatList: Component = () => {
  const [selectedTabKeyGet, selectedTabKeySet] = createSignal("All chats");

  return (
    <Layout>
      <Layout.Header>
        <Tabs keySelected={selectedTabKeyGet()} onChange={selectedTabKeySet}>
          <TabText key="All chats" label="All chats" />
          <TabText key="Work" label="Work" />
        </Tabs>
      </Layout.Header>
      <Layout.Content>
        <ChatItem
          contactName="Pizza"
          isMuted
          isOfficial
          isVoiceActive
          lastMessageStatus="none"
          lastMessageText="So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?"
          lastMessageSenderName="jija"
          unreadMessagesCount={3}
          lastMessageDate={new Date()}
        />
        <ChatItem
          contactName="Kostya"
          isOfficial
          lastMessageStatus="received"
          lastMessageText="Lol, lul?"
          lastMessageDate={sub(new Date(), { minutes: 10 })}
        />
        <For each={times(10, () => null)}>
          {() => (
            <ChatItem
              contactName="Ilya"
              lastMessageStatus="viewed"
              lastMessageText="Wow, waw?"
              lastMessageDate={sub(new Date(), { days: 1 })}
            />
          )}
        </For>
      </Layout.Content>
    </Layout>
  );
};
