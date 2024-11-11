import { useAllDragons } from "../hooks/useDragons";
import { useBattleStore } from "../store/useBattleStore";
import { useDragonStore } from "../store/useDragonStore";
import { DragonDropdown } from "./DragonDropdown";
import { DragonsStats } from "./DragonStats";
import styles from "./PreBattleSetup.module.css";
import { StartBattleButton } from "./StartBattleButton";

export const PreBattleSetup = () => {
  const { dragonList } = useAllDragons();

  const { leftDragon, rightDragon, setLeftDragon, setRightDragon } =
    useDragonStore();

  const { battle } = useBattleStore();

  const battleHasStarted = !!battle?.id;

  return (
    <section>
      <div className={styles.preBattleSetup}>
        <div>
          <DragonDropdown
            disabled={battleHasStarted}
            list={dragonList}
            selectHandler={setLeftDragon}
            value={leftDragon?.id}
          />
          <DragonsStats dragon={leftDragon} />
        </div>

        <div>
          <DragonDropdown
            disabled={battleHasStarted}
            list={dragonList}
            selectHandler={setRightDragon}
            value={rightDragon?.id}
          />
          <DragonsStats dragon={rightDragon} />
        </div>
      </div>

      {!battle?.id && (
        <StartBattleButton
          leftDragonId={leftDragon?.id}
          rightDragonId={rightDragon?.id}
        />
      )}
    </section>
  );
};
