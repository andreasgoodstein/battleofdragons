import { API_URL } from "../config";

export const startBattle = async (
  leftDragonId: number,
  rightDragonId: number
): Promise<Battle> =>
  await (
    await fetch(`${API_URL}/startBattle`, {
      method: "post",
      body: JSON.stringify({ leftDragonId, rightDragonId }),
    })
  ).json();
