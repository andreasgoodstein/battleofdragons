type Battle = {
  id: number;
  timestamp: Date;
  leftDragonId: number;
  leftDragonHealth: number;
  rightDragonId: number;
  rightDragonHealth: number;
  winnerId: number | null;
};

type Dragon = {
  id: number;
  name: string;
  strength: number;
};
