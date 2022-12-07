import { FC } from "react";

import { avatarHeight } from "../atoms";
import {
  GamePlayersWrapper,
  PlayerNameContainer,
  PlayerAvatar,
  PlayerName as Name,
  PlayerAvatarContainer,
  PlayerInfoContainer,
  GamePlayersContainer,
} from "./styles";
import { handProportion } from "../../design/hand";
import { PlayerPublic } from "../../types";
import { avatars, text } from "../../assets";
import { PlayerGameState, PlayerLastBid } from "./game-player-info";
import { LoserBadge, WinnerBadge } from "../badges/badges";
import { useLatestBid } from "../../service";
import { Die } from "../die";
import { PlayerBadge } from "../badges";

interface GamePlayerProps {
  totalPlayers: number;
  player: PlayerPublic;
}

export const GamePlayer: FC<GamePlayerProps> = ({ totalPlayers, player }) => {
  const { avatar } = handProportion(avatars[player.avatarId].name);
  const latestBid = useLatestBid();

  return (
    <GamePlayersWrapper totalPlayers={totalPlayers} isActive={player.isActive}>
      <PlayerBadge player={player} />

      <GamePlayersContainer totalPlayers={totalPlayers}>
        <PlayerAvatarContainer>
          <PlayerAvatar src={avatar} alt={player.username} height={avatarHeight[totalPlayers - 1]} />
        </PlayerAvatarContainer>

        <PlayerInfoContainer>
          <PlayerNameContainer>
            <Name>{player.username}</Name>
          </PlayerNameContainer>
          <PlayerGameState player={player} />
        </PlayerInfoContainer>
      </GamePlayersContainer>
      {lastBid?.userId === player.userId && <PlayerLastBid player={player} lastBid={lastBid} />}
    </GamePlayersWrapper>
  );
};
