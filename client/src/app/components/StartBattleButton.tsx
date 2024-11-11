import { useStartBattle } from "../hooks/useBattle";
import { Translate } from "../localization/en";

type StartBattleButtonProps = {
  leftDragonId?: number;
  rightDragonId?: number;
};
export const StartBattleButton = ({
  leftDragonId,
  rightDragonId,
}: StartBattleButtonProps) => {
  const startBattle = useStartBattle();

  const isBattleDisabled = !leftDragonId || !rightDragonId;

  return (
    <button
      disabled={isBattleDisabled}
      onClick={() => {
        if (isBattleDisabled) {
          return;
        }

        startBattle({ leftDragonId, rightDragonId });
      }}
    >
      {Translate.START_BATTLE}
    </button>
  );
};
