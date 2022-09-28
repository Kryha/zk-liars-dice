import create from "zustand";
import { Socket } from "@heroiclabs/nakama-js";
import { GameConfig } from "../interfaces";

export interface MatchMakerState {
  ticket?: string | undefined;
  matchId?: string | undefined;
  setTicket: (ticket: string) => void;
  setMatchId: (match_id: string) => void;
}

export const useMatchMakerState = create<MatchMakerState>()((set) => ({
  ticket: undefined,
  matchId: undefined,
  setTicket: (ticket: string) => set(() => ({ ticket: ticket })),
  setMatchId: (match_id: string) => set(() => ({ matchId: match_id })),
}));
