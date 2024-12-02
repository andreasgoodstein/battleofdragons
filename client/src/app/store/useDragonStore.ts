/**
 * Author notes:
 * Wanted to use 'zustand' for this, but encounter weird bug that
 * could not be solved within time constraints.
 *
 * Fixed:
 * Bug most likely caused by the wrapping of the 'create' call in the closure with
 * the dragonList ref directly from useDragons.ts
 */

import { create } from "zustand";

type DragonStore = {
  dragonList?: Dragon[];
  leftDragon?: Dragon;
  rightDragon?: Dragon;

  setDragonList: (dragonList?: Dragon[]) => void;
  setLeftDragon: (leftDragonId?: number) => void;
  setRightDragon: (rightDragonId?: number) => void;
};

export const useDragonStore = create<DragonStore>((set) => ({
  setDragonList: (dragonList?: Dragon[]) => set({ dragonList }),

  setLeftDragon: (leftDragonId?: number) =>
    set(({ dragonList }) => ({
      leftDragon: dragonList?.find(({ id }) => id === leftDragonId),
    })),

  setRightDragon: (rightDragonId?: number) =>
    set(({ dragonList }) => ({
      rightDragon: dragonList?.find(({ id }) => id === rightDragonId),
    })),
}));
