import { Action } from "../../types";
import { capitalize } from "../../util/text";

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
  drawPowerUpsRound: (amount?: number) => (amount === undefined ? "" : `+${amount}`),
  healAmount: (amount: number) => (amount === 1 ? `x${amount} power-up` : `x${amount} power-ups`),
  xAmount: (amount?: number) => `x${amount}`,
  powerUpAmount: (amount: number) => `+${amount}`,
  powerUpsHiddenMoves: (username: string) => `welcome ${username}. Let’s see which power-ups you’ve got this time…`,
  zeroAmount: (amount: string | number) => `0${amount}`,
  timeInMinsAndSeconds: (minutes: string | number, seconds: string | number) => `-${minutes}.${seconds}`,
  percentageAmount: (amount: string | number) => `${amount}%`,
  xRounds: (amount: string | number) => `x${amount === 1 ? `${amount} round` : `${amount} rounds`}`,
  playerIsMakingAMove: (username: string) => `${username} is making a move...`,
  endOfRound: (round: string | number) => `end of ${round} round`,
  aPlayerIsCallingBoloneyOnYou: (username: string) => `${username} is calling boloney against you... Good luck!`,
  idlePlayerCallingBoloney: (activeUsername: string, targetUsername: string) =>
    `${activeUsername} is calling boloney against ${targetUsername}... Wait and see the result of this bold move!`,
  congratulationsBoloney: (username: string) => `congratulations ${username}, you rock calling Boloney!`,
  youSuckAtBluffing: (username?: string) => `${username} is right, you suck at bluffing... You lose a die!`,
  congratulationsExact: (username: string) => `congratulations ${username}, you rock at calling Exact!`,
  playerIsSafe: (username: string) => `congratulations ${username}, your ass is safe!`,
  appendColon: (text?: string) => (text ? `${capitalize(text)}:` : ""),
  congratulationsIdlePlayerActiveWon: (username: string, action: Action) => `congratulations ${username}, you rock at calling ${action}!`,
  congratulationsIdlePlayerActiveLost: (username: string, action: Action) => `congratulations ${username}, your ass is safe ${action}!`,
  congratulationsIdlePlayer: (username: string, action: Action) => `congratulations ${username}, they are awesome at calling ${action}!`,
  aPlayerLostByTimeOut: (username: string) => `${username} run out of time. We skip his turn and he also loses a die!`,
  areYouSureYouWantToCallBoloney: (username: string) => `you sure you wanna call Boloney! against ${username}?`,
  activeWasRightExact: (username: string) => `${username} was on the money!`,
  activeWasWrongExact: (username: string) => `${username} thought they had it… but no such luck!`,
  idleBoloney: (winner: string, loser: string) => `${winner} outsmarted ${loser}.`,
  choosePlayer: (powerUp: string) => `choose the player you want to play ${powerUp} against. Yikes.`,
  targetsPowerUps: (username: string) => `${username}'s power-ups`,
  healDice: (healDiceAmount: string) => `select x${healDiceAmount} power-ups you want to exchange!`,
  sumOfDice: (sum: number) => `=${sum}`,
  //TODO: Make one function that handles similar functions
  plusAmount: (amount: number) => `+${amount}`,
  roundWithOrdinal: (ordinal: string) => `${ordinal} round`,
  stageNumber: (amount: number) => (amount === undefined ? " stage ?" : `stage ${amount}`),
  timerHeader: (time: string | number) => `| ${time}`,
  endOfRoundOrdinal: (round: string | number) => `end ${round} round`,
  usernameTitle: (username?: string, isLocalPlayer?: boolean) => (isLocalPlayer ? `${username} (you)` : `${username}`),
  endOfTurnResult: (amount?: number | string) => (amount ? `-1 = x${amount}` : "= x0"),
  diceAmount: (amount: number) => (amount > 1 ? `(dice x${amount}` : `(die x${amount}`),
  diceWithoutAmount: (amount: number) => (amount > 1 ? "(dice " : "(die "),
  formatTime: (hour: number, minutes: number) => `${hour}:${minutes < 10 ? `0${minutes}` : minutes}`,
  time: (hour: string, minutes: string) => `-${hour}:${minutes}`,
  diceValues: (diceValues?: number[]) => (diceValues ? ` : [${diceValues.toString()}]  ` : " : []  "),
  playerDice: (amount: number, diceValues?: number[]) => param.diceWithoutAmount(amount) + param.diceValues(diceValues),
  soundOnOrOff: (state: boolean) => (state ? "on" : "off"),
};
