import { atom } from "recoil";

export const nameState = atom<string>({
  key: "nameState",
  default: "",
});

export const petNameState = atom<string>({
  key: "petNameState",
  default: "",
});
