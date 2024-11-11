import { useCallback, useState } from "react";
import { useAllDragons } from "../hooks/useDragons";

export const useDragonStore = () => {
  const { dragonList } = useAllDragons();

  const [leftDragon, updateLeftDragon] = useState<Dragon>();
  const [rightDragon, updateRightDragon] = useState<Dragon>();

  const setLeftDragon = useCallback(
    (dragonId?: number) => {
      updateLeftDragon(dragonList.find(({ id }) => id === dragonId));
    },
    [dragonList]
  );

  const setRightDragon = useCallback(
    (dragonId?: number) => {
      updateRightDragon(dragonList.find(({ id }) => id === dragonId));
    },
    [dragonList]
  );

  return { leftDragon, rightDragon, setLeftDragon, setRightDragon };
};

/**
 * Author notes:
 * Wanted to use 'zustand' for this, but encounter weird bug that
 * could not be solved within time constraints.
 */

// import { create } from "zustand";
// import { useAllDragons } from "../hooks/useDragons";

// type DragonStore = {
//   leftDragon?: Dragon;
//   rightDragon?: Dragon;

//   setLeftDragon: (leftDragonId?: number) => void;
//   setRightDragon: (rightDragonId?: number) => void;
// };

// export const useDragonStore = () => {
//   const { dragonList } = useAllDragons();

//   return create<DragonStore>((set) => ({
//     leftDragon: undefined,
//     rightDragon: undefined,

//     setLeftDragon: (leftDragonId?: number) =>
//       set(() => ({
//         leftDragon: leftDragonId
//           ? dragonList.find(({ id }) => id === leftDragonId)
//           : undefined,
//       })),

//     setRightDragon: (rightDragonId?: number) =>
//       set(() => ({
//         rightDragon: rightDragonId
//           ? dragonList.find(({ id }) => id === rightDragonId)
//           : undefined,
//       })),
//   }))();
// };
