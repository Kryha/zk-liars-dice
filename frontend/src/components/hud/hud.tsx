import { FC } from "react";

import { avatars } from "../../assets/local-data/avatar";
import { handProportion } from "../../design";
import { Die, PlayerPublic, PowerUpId } from "../../types";
import { DiceOverview } from "../dice-overview";
import { PowerUpOverview } from "../power-up-overview";
import { LocalPlayer, PlayerAvatar, PlayerOverview } from "./styles";

interface HUDProps {
  dice?: Die[];
  powerUpIds?: PowerUpId[];
  player: PlayerPublic;
}

export const HUD: FC<HUDProps> = ({ dice, powerUpIds, player }) => {
  const { avatar } = handProportion(avatars[player.avatarId].name);

  return (
    <PlayerOverview>
      <LocalPlayer>
        <PlayerAvatar height="10vh" src={avatar} />
      </LocalPlayer>
      <DiceOverview dice={dice} />
      <PowerUpOverview powerUpIds={powerUpIds} />
    </PlayerOverview>
  );
};
