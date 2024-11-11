import { startBattle } from "../services/battleService";
import { useMutation } from "../services/serviceClient";
import { useBattleStore } from "../store/useBattleStore";

type StartBattleParams = {
  leftDragonId: number;
  rightDragonId: number;
};
export const useStartBattle = () => {
  const { setBattle: setBattleId } = useBattleStore();

  const { mutateAsync } = useMutation({
    mutationKey: ["startBattle"],
    mutationFn: ({ leftDragonId, rightDragonId }: StartBattleParams) =>
      startBattle(leftDragonId, rightDragonId),
    onSuccess: (data) => {
      console.log("newBattle", data);
      setBattleId(data);
    },
  });

  return mutateAsync;
};
