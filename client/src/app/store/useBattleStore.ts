import { create } from "zustand";

type BattleStore = {
  battle?: Battle;
  setBattle: (battle?: Battle) => void;
};

export const useBattleStore = create<BattleStore>((set) => ({
  setBattle: (battle?: Battle) => set({ battle }),
}));
