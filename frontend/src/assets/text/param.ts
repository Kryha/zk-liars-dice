import { Action } from "../../types";

export const param = {
  yourDice: (amount: number) => `your dice (x${amount})`,
  yourPowerUp: (amount: number) => `your power-up (x${amount})`,
  lessThanTenSeconds: (seconds: number) => `0${seconds}`,
  amountXOfDice: (amount: number) => `x${amount}`,
  players: (amount: number) => `${amount} ${amount === 1 ? "player" : "players"}`,
  dice: (amount: number) => `${amount} ${amount === 1 ? "die" : "dice"}`,
  powerUps: (amount: number) => `${amount} ${amount === 1 ? "power-up" : "power-ups"}`,
  matchStatusItemNumber: (amount: number) => `${amount === undefined ? "?" : amount}`,
  round: (amount: number) => `${amount === 1 ? "round" : "rounds"}`,
  drawPowerUpsRound: (amount: number) => `+${amount}`,
  healAmount: (amount: number) => (amount === 1 ? `x${amount} power-up` : `x${amount} power-ups`),
  xAmount: (amount: number) => `x${amount}`,
  powerUpAmount: (amount: number) => `+${amount}`,
  powerUpsHiddenMoves: (username: string) => `welcome ${username}, let's find out which hidden moves you will have...`,
  zeroAmount: (amount: string | number) => `0${amount}`,
  timeInMinsAndSeconds: (minutes: string | number, seconds: string | number) => `-${minutes}.${seconds}`,
  findOutYourPips: (username: string) => `welcome ${username}, let's find out your pips for this first round...`,
  percentageAmount: (amount: string | number) => `${amount}%`,
  xRounds: (amount: string | number) => `x${amount === 1 ? `${amount} round` : `${amount} rounds`}`,
  playerIsMakingAMove: (username: string) => `${username} is making its move, wait for it...`,
  endOfRound: (round: string | number) => `end of ${round} round`,
  aPlayerIsCallingBoloneyOnYou: (username: string) => `${username} is calling boloney against you... Good luck!`,
  idlePlayerCallingBoloney: (activeUsername: string, targetUsername: string) =>
    `${activeUsername} is calling boloney against ${targetUsername}... Wait and see the result of this bold move!`,
  congratulationsBoloney: (username: string) => `congratulations ${username}, you rock calling Boloney!`,
  youSuckAtBluffing: (username?: string) => `${username} is right, you suck at bluffing... You lose a die!`,
  youRockAtExact: (amount: number | string) => `you rock at calling Exact! You get x${amount} new power-ups!`,
  congratulationsExact: (username: string) => `congratulations ${username}, you rock at calling Exact!`,
  playerIsSafe: (username: string) => `congratulations ${username}, your ass is safe!`,
  appendColon: (text?: string) => `${text}:`,
  congratulationsIdlePlayer: (username: string, action: Action) => `congratulations ${username}, they are awesome at calling ${action}!`,
  aPlayerLostByTimeOut: (username: string) => `${username} run out of time. We skip his turn and he also loses a die!`,
};
