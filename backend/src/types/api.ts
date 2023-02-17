import { BidPayloadBackend } from "./bid";
import { Die } from "./die";
import { HistoryEvent } from "./history";
import { Action, MatchSettings, MatchStage, PlayerPublic, PlayerRanked, TurnActionStep } from "./match";
import { PowerUpId, isPowerUpTypeArray } from "./power-up";

export interface PlayerJoinedPayloadBackend {
  matchState: {
    players: Record<string, PlayerPublic>;
    playerOrder: string[];
    matchStage: MatchStage;
    powerUpIds: PowerUpId[];
    matchSettings: MatchSettings;
    leaderboard: PlayerRanked[];
    hasRolledDice: boolean;
    diceValue: Die[];
    bids: BidPayloadBackend;
    round: number;
    stageNumber: number;
    drawRoundCounter: number;
    turnActionStep: TurnActionStep;
    lastAction: Action;
    historyEvents: HistoryEvent[];
  };
  remainingStageTime: number;
}

export interface BoloneyPayloadBackend {
  players: Record<string, PlayerPublic>;
}

export interface ExactPayloadBackend {
  players: Record<string, PlayerPublic>;
}
export interface PlayerLostByTimeOutPayloadBackend {
  players: Record<string, PlayerPublic>;
}

export interface HealDicePayloadBackend {
  players: Record<string, PlayerPublic>;
}
export interface HealDicePayloadFrontend {
  selectedPowerUps: PowerUpId[];
}

export const isHealDicePayloadFrontend = (value: unknown): value is HealDicePayloadFrontend => {
  const assertedVal = value as HealDicePayloadFrontend;

  return isPowerUpTypeArray(assertedVal.selectedPowerUps);
};

export interface RoundSummaryTransitionPayloadBackend {
  players: Record<string, PlayerPublic>;
  leaderboard: PlayerRanked[];
  round: number;
  stageNumber: number;
  drawRoundCounter: number;
}

export interface PlayerLeftPayloadBackend {
  players: Record<string, PlayerPublic>;
  playerOrder: string[];
  stage: MatchStage;
  leaderboard?: PlayerPublic[];
}

export type PlayerGetPowerUpsPayloadBackend = PowerUpId[];

export interface StageTransitionPayloadBackend {
  matchStage: MatchStage;
  remainingStageTime?: number;
}

export type PlayerReadyPayloadBackend = Record<string, PlayerPublic>;

export interface PlayerOrderShufflePayloadBackend {
  playerOrder: string[];
}

export interface PlayerActivePayloadBackend {
  activePlayerId: string;
}
