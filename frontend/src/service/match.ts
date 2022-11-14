import { useCallback, useState } from "react";

import { text } from "../assets";
import { useStore } from "../store";
import { MatchOpCode, NkResponse } from "../types";
import { parseError } from "../util";

export const useMatch = () => {
  const socket = useStore((state) => state.socket);
  const matchStage = useStore((state) => state.matchStage);
  const matchId = useStore((state) => state.matchId);

  const [isLoading, setIsLoading] = useState(false);

  const sendMatchState = useCallback(
    async (opCode: MatchOpCode, payload?: string): Promise<NkResponse> => {
      if (!socket) throw new Error(text.error.noSocketConnected);
      if (!matchId) throw new Error(text.error.noMatchIdFound);
      try {
        setIsLoading(true);
        socket.sendMatchState(matchId, opCode, payload || "");
      } catch (error) {
        const parsedErr = await parseError(error);
        return parsedErr;
      } finally {
        setIsLoading(false);
      }
    },
    [matchId, socket]
  );

  const broadcastPlayerReady = () => sendMatchState(MatchOpCode.PLAYER_READY);

  return {
    matchStage,
    isLoading,
    sendMatchState,
    broadcastPlayerReady,
  };
};
