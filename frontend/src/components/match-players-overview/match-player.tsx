import { FC } from "react";

import { avatarHeight } from "../../atoms";
import {
  MatchPlayersWrapper,
  PlayerNameContainer,
  PlayerAvatar,
  PlayerName as Name,
  PlayerAvatarContainer,
  PlayerInfoContainer,
  MatchPlayersContainer,
  DeadPlayerAvatar,
  DeadPlayerName,
} from "./styles";
import { handProportion } from "../../design/hand";
import { PlayerPublic } from "../../types";
import { avatars } from "../../assets";
import { PlayerMatchState } from "./match-player-info";
import { PlayerBadge } from "../badges";
import { PlayerSidebarInfo } from "../player-sidebar-info";
import { useStore } from "../../store";
import { powerupCanNotBeUsedOnPlayer, powerUpRequiresTarget } from "../../util";
import { useLatestBid } from "../../service";

interface MatchPlayerProps {
  totalPlayers: number;
  player: PlayerPublic;
}

export const MatchPlayer: FC<MatchPlayerProps> = ({ totalPlayers, player }) => {
  const lastBid = useLatestBid();

  const playerRoundData = useStore((state) => state.getPlayerRoundData(player.userId));
  const { targetPlayerId: targetPowerUpPlayerId, active: activePowerUp, result } = useStore((state) => state.powerUpState);
  const setPowerUpState = useStore((state) => state.setPowerUpState);
  const lastAction = useStore((state) => state.lastAction);

  const hasPlayerLost = player.status === "lost";
  const { avatar } = hasPlayerLost ? handProportion("grave") : handProportion(avatars[player.avatarId].name);

  // TODO: make conditions more clear
  const isTargetable = player.status !== "lost" && !!activePowerUp && !result && powerUpRequiresTarget(activePowerUp.id);
  const isDisabled = powerupCanNotBeUsedOnPlayer(player, activePowerUp?.id);

  const handleSelect = () => {
    setPowerUpState({ targetPlayerId: player.userId });
  };

  return (
    <MatchPlayersWrapper
      isActive={player.isActive || targetPowerUpPlayerId === player.userId}
      hasPlayerLost={hasPlayerLost}
      isTargetable={isTargetable}
      onClick={() => isTargetable && handleSelect()}
    >
      <PlayerBadge player={player} lastAction={lastAction} />

      <MatchPlayersContainer totalPlayers={totalPlayers}>
        {hasPlayerLost ? (
          <PlayerAvatarContainer>
            <DeadPlayerAvatar src={avatar} alt={player.username} height={avatarHeight[totalPlayers - 1]} />
            <DeadPlayerName>{player.username}</DeadPlayerName>
          </PlayerAvatarContainer>
        ) : (
          <>
            <PlayerAvatarContainer isTargetable={isTargetable}>
              <PlayerAvatar src={avatar} alt={player.username} height={avatarHeight[totalPlayers - 1]} />
            </PlayerAvatarContainer>
            <PlayerInfoContainer>
              <PlayerNameContainer>
                <Name>{player.username}</Name>
              </PlayerNameContainer>
              <PlayerMatchState player={player} playerRoundData={playerRoundData} />
            </PlayerInfoContainer>
          </>
        )}
      </MatchPlayersContainer>
      <PlayerSidebarInfo
        player={player}
        lastBid={lastBid}
        totalPlayers={totalPlayers}
        hasRadioButton={isTargetable}
        isDisabled={isDisabled}
        isChecked={player.userId === targetPowerUpPlayerId}
        onSelect={handleSelect}
      />
    </MatchPlayersWrapper>
  );
};
