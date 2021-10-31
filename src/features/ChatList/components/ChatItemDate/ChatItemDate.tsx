import { intlFormat, isSameWeek, isSameYear, isToday } from "date-fns";
import { Component } from "solid-js";

interface ChatItemDateProps {
  date: Date;
}

export const ChatItemDate: Component<ChatItemDateProps> = (props) => {
  if (isToday(props.date)) {
    return intlFormat(props.date, { hour: "2-digit", minute: "2-digit" }); // 12:00 AM
  }

  const now = new Date();

  if (isSameWeek(props.date, now)) {
    return intlFormat(props.date, { weekday: "short" }); // Mon, Tue, Wed, ..., Sun
  }

  if (isSameYear(props.date, now)) {
    return intlFormat(props.date, { month: "short", day: "numeric" }); // May 2
  }

  return intlFormat(props.date, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }); // 2021 May 2
};
