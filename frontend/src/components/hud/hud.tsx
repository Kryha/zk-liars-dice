import { FC } from "react";
import { Die } from "../../interfaces/hud";
import { DiceOverview } from "../dice-overview";
import { PowerUpOverview } from "../power-up-overview";

interface HudProps {
  dice: Die[];
}

export const Hud: FC<HudProps> = ({ dice }) => {
  return (
    <>
      <DiceOverview dice={dice} />
      <PowerUpOverview />
    </>
  );
};