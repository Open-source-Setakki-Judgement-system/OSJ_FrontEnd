import { atom } from "recoil";

export interface PageStateAtomType {
  page: number;
  side: "wall" | "door" | undefined;
}

export const PageStateAtom = atom<PageStateAtomType>({
  key: "pageState",
  default: { page: 1, side: undefined },
});
