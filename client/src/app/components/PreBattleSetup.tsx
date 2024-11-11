import { useAllDragons } from "../hooks/useDragons";
import { DragonDropdown } from "./DragonDropdown";
import styles from "./PreBattleSetup.module.css";

export const PreBattleSetup = () => {
  const { dragonList } = useAllDragons();

  return (
    <div className={styles.preBattleSetup}>
      <DragonDropdown list={dragonList} />
      <DragonDropdown list={dragonList} />
    </div>
  );
};
