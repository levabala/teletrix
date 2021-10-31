import { Component, Match, Show, Switch } from "solid-js";

import iconMuted from "../../../../assets/icons/muted.svg";
import iconOfficial from "../../../../assets/icons/official.svg";

import { ChatItemDate } from "../ChatItemDate";

import styles from "./ChatItem.module.scss";

interface ChatItemProps {
  // main info
  avatarUrl?: string;
  contactName: string;

  // marks
  isOfficial?: boolean;
  isMentioned?: boolean;
  isMuted?: boolean;
  isVoiceActive?: boolean;

  // message info
  unreadMessagesCount?: number;
  lastMessageSenderName?: string;
  lastMessageStatus: "received" | "viewed" | "sending" | "none";
  lastMessageText: string;
  lastMessageDate: Date;
  // TODO: add message attachment preview support
  lastMessageAttachmentUrl?: string;

  // actions
  onUnread?: () => void;
  onPin?: () => void;
  onMute?: () => void;
  onDelete?: () => void;
  onArchive?: () => void;
}

export const ChatItem: Component<ChatItemProps> = (props) => {
  return (
    <div class={styles.ChatItem}>
      <div class={styles.avatarWrapper}>
        <Show when={props.avatarUrl !== undefined}>
          <img src={props.avatarUrl} />
        </Show>
      </div>
      <div class={styles.content}>
        <div class={styles.topRow}>
          <span class={styles.name}>{props.contactName}</span>
          <Show when={props.isOfficial}>
            <span class={styles.officialMark}>
              <img src={iconOfficial} />
            </span>
          </Show>
          <Show when={props.isMuted}>
            <span class={styles.mutedMark}>
              <img src={iconMuted} />
            </span>
          </Show>
          <span class={styles.messageStatus}>
            <Switch>
              <Match when={props.lastMessageStatus === "received"}>✓</Match>
              <Match when={props.lastMessageStatus === "viewed"}>
                <span style={{ "margin-right": "-5px" }}>✓</span>
                <span>✓</span>
              </Match>
            </Switch>
          </span>
          <span class={styles.messageDate}>
            <ChatItemDate date={props.lastMessageDate} />
          </span>
        </div>
        <div class={styles.bottomRow}>
          <div class={styles.messageWrapper}>
            <div class={styles.messageSender}>
              {props.lastMessageSenderName}
            </div>
            <div class={styles.messageContentWrapper}>
              <Show when={props.lastMessageAttachmentUrl !== undefined}>
                <span class={styles.messageAttachmentWrapper}></span>
              </Show>
              <span class={styles.messageText}>{props.lastMessageText}</span>
            </div>
          </div>
          <div class={styles.messageInfoWrapper}>
            <Switch>
              <Match when={props.isMentioned}>
                <div class={styles.mentionMark}></div>
              </Match>
              <Match
                when={
                  props.unreadMessagesCount !== undefined &&
                  props.unreadMessagesCount > 0
                }
              >
                <div class={styles.messagesCount}></div>
              </Match>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
