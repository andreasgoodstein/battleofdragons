type Battle = {
  id: number;
  dragons: Dragon[];
  timestamp: Date;
};

type Dragon = {
  id: number;
  name: string;
  strength: number;
};
