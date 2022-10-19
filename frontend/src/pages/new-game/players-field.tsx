import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

import { text } from "../../assets";
import { BaseOption, BaseSelect, Input } from "../../components";
import { MAX_DICE_PER_PLAYER, MAX_PLAYERS, MIN_DICE_PER_PLAYER, MIN_PLAYERS } from "../../constants";
import { MatchSettings } from "../../types";
import { range } from "../../util";
import { PlayersDiceContainer } from "./styles";

interface Props {
  register: UseFormRegister<MatchSettings>;
}

export const PlayersField: FC<Props> = ({ register }) => {
  return (
    <PlayersDiceContainer>
      <Input label={text.newGame.players}>
        <BaseSelect {...register("requiredPlayerCount")}>
          {range(MAX_PLAYERS, MIN_PLAYERS).map((n) => (
            <BaseOption key={n} value={n}>
              {text.param.players(n)}
            </BaseOption>
          ))}
        </BaseSelect>
      </Input>
      <Input label={text.newGame.dicePerPlayer}>
        <BaseSelect {...register("dicePerPlayer")}>
          {range(MAX_DICE_PER_PLAYER, MIN_DICE_PER_PLAYER).map((n) => (
            <BaseOption key={n} value={n}>
              {text.param.dice(n)}
            </BaseOption>
          ))}
        </BaseSelect>
      </Input>
    </PlayersDiceContainer>
  );
};
