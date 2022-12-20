import { useEffect, useState } from "react";

import { text } from "../assets/text";
import { DEFAULT_POOL_MAX_PLAYERS, DEFAULT_POOL_MIN_PLAYERS, DEFAULT_POOL_QUERY, RPC_CREATE_MATCH } from "../constants";
import { useSession, useStore } from "../store";
import { MatchSettings, NkResponse } from "../types";
import { parseError } from "../util";
import { nakama } from "./nakama";

export const useJoinMatch = (matchId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
  const setMatchId = useStore((state) => state.setMatchId);
  const setIsJoining = useStore((state) => state.setIsJoining);

  useEffect(() => {
    const join = async () => {
      if (!session || !session.username) return;
      try {
        setIsJoining(true);
        const match = await nakama.socket.joinMatch(matchId, undefined, { username: session.username });
        setMatchId(match.match_id);
      } catch (error) {
        setIsJoining(false);
        console.info(error);
      } finally {
        setIsLoading(false);
      }
    };
    join();
  }, [matchId, session, setIsJoining, setMatchId]);

  return isLoading;
};

export const createMatch = async (settings: MatchSettings): Promise<NkResponse<string>> => {
  try {
    const rpcRes = await nakama.socket.rpc(RPC_CREATE_MATCH, JSON.stringify(settings));
    if (!rpcRes.payload) throw new Error(text.error.noPayloadReturned);

    const parsed = JSON.parse(rpcRes.payload);
    if (!parsed.match_id) throw new Error(text.error.receivedUnexpectedPayload);

    return parsed.match_id;
  } catch (error) {
    const parsedErr = await parseError(error);
    return parsedErr;
  }
};

export const joinPool = async () => {
  try {
    await nakama.socket.addMatchmaker(DEFAULT_POOL_QUERY, DEFAULT_POOL_MIN_PLAYERS, DEFAULT_POOL_MAX_PLAYERS);
  } catch (error) {
    console.info(error);
  }
};
