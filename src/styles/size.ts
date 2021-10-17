import { ValueOf } from "../utils/type";

export const Size = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
} as const;

export type Size = ValueOf<typeof Size>;
