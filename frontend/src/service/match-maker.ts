import { Match } from "@heroiclabs/nakama-js";
import { useCallback, useState } from "react";
import { MatchSettings, NkResponse } from "../interfaces";
import { useAuthState, useMatchMakerState } from "../store";
import { parseError } from "../util";

export const useMatchMaker = () => {
  const socket = useAuthState((state) => state.socket);
  const setMatchId = useMatchMakerState((state) => state.setMatchId);
  const [isLoading, setIsLoading] = useState(false);

  const joinMatch = useCallback(
    async (matchId: string): Promise<NkResponse> => {
      try {
        if (socket === undefined) throw new Error("No socket connected");

        setIsLoading(true);

        const match: Match = await socket.joinMatch(matchId);
        setMatchId(match.match_id);
        // TODO: go to game view
      } catch (error) {
        const parsedErr = await parseError(error);
        return parsedErr;
      } finally {
        setIsLoading(false);
      }
    },
    [socket, setMatchId]
  );

  const joinLobby = useCallback(async (): Promise<NkResponse> => {
    try {
      if (socket === undefined) throw new Error("No socket connected");
      setIsLoading(true);

      socket.onmatchmakermatched = async (matched) => {
        console.info("Received MatchmakerMatched message: ", matched);
        console.info("Matched opponents: ", matched.users);

        if (matched.match_id) await joinMatch(matched.match_id);
      };

      // These are just quick settings for development
      // TODO: replace with agreed upon values
      const query = "*";
      const minPlayers = 2;
      const maxPlayers = 2;

      await socket.addMatchmaker(query, minPlayers, maxPlayers);
    } catch (error) {
      const parsedErr = await parseError(error);
      return parsedErr;
    } finally {
      setIsLoading(false);
    }
  }, [joinMatch, socket]);

  const createMatch = useCallback(
    async (settings: MatchSettings): Promise<NkResponse<string | undefined>> => {
      try {
        if (socket === undefined) throw new Error("No socket connected");

        setIsLoading(true);

        const rpcRes = await socket.rpc("create_match", JSON.stringify(settings));
        if (!rpcRes.payload) throw new Error("No payload returned from createMatch");

        return JSON.parse(rpcRes.payload).match_id;
      } catch (error) {
        const parsedErr = await parseError(error);
        return parsedErr;
      } finally {
        setIsLoading(false);
      }
    },
    [socket]
  );

  const findMatches = useCallback(async (): Promise<NkResponse<string[]>> => {
    try {
      if (socket === undefined) throw new Error("No socket connected");

      setIsLoading(true);

      const rpcRes = await socket.rpc("find_match");
      if (!rpcRes.payload) throw new Error("No payload returned from createMatch");

      return JSON.parse(rpcRes.payload).match_ids;
    } catch (error) {
      const parsedErr = await parseError(error);
      return parsedErr;
    } finally {
      setIsLoading(false);
    }
  }, [socket]);

  return {
    joinLobby,
    createMatch,
    findMatches,
    joinMatch,
    isLoading,
  };
};
