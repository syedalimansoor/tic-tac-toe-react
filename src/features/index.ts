import { StateCreator } from "zustand";

export type StateCreatorWithMiddleware<Slice extends object> = StateCreator<
  Slice,
  [["zustand/devtools", never]]
>;
