// TODO: convert to zod
export type PowerUpType = "interrogate" | "satelliteImage" | "reinforce" | "reconnaissance" | "sabotage" | "regroup" | "coupDetat" | "diversion" | "defection";

export interface Die {
  rolledValue: number;
}

export interface PowerUp {
  name: PowerUpType;
  image: string;
}
