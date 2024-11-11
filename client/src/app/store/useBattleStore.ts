import { create } from "zustand";

type BattleStore = {
  battle?: Battle;
  setBattle: (battle?: Battle) => void;
};

export const useBattleStore = create<BattleStore>((set) => ({
  battleId: undefined,
  setBattle: (battle?: Battle) => set(() => ({ battle })),
}));
