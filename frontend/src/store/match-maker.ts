import create from "zustand";

// TODO: is this store useful? can't these attributes be stored only in the url?

interface MatchMakerState {
  ticket?: string;
  matchId?: string;

  setTicket: (ticket: string) => void;
  setMatchId: (match_id: string) => void;
}

export const useMatchMakerState = create<MatchMakerState>()((set) => ({
  minCount: 2,
  maxCount: 7,
  query: "*",
  ticket: undefined,
  setMinCount: (min: number) => set(() => ({ minCount: min })),
  setMaxCount: (max: number) => set(() => ({ maxCount: max })),
  setTicket: (ticket: any) => set(() => ({ ticket: ticket })),
  setQuery: (query: GameConfig) => set(() => ({ query: query })),
}));
