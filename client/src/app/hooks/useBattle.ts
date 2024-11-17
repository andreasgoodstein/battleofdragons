import { startBattle } from "../services/battleService";
import { useMutation } from "../services/serviceClient";
import { useBattleStore } from "../store/useBattleStore";

type StartBattleParams = {
  leftDragonId: number;
  rightDragonId: number;
};
export const useStartBattle = () => {
  const { setBattle } = useBattleStore();

  const { mutateAsync } = useMutation({
    mutationKey: ["startBattle"],
    mutationFn: ({ leftDragonId, rightDragonId }: StartBattleParams) =>
      startBattle(leftDragonId, rightDragonId),
    onSuccess: (data) => {
      setBattle(data);
    },
  });

  return mutateAsync;
};
