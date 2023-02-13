import { FC } from "react";

import { useLocalPlayer } from "../../service";
import { text } from "../../assets";
import { BottomButtonWrapper } from "../atoms";
import { Timer } from "../timer";
import { ErrorView } from "../error-view";
import { ButtonReady } from "../button-ready";
import { useEffectOnce } from "usehooks-ts";
import { useStore } from "../../store";
import { MatchHeading } from "../match-heading";

export const GetPowerUps: FC = () => {
  const localPlayer = useLocalPlayer();
  const setSpinnerVisibility = useStore((state) => state.setSpinnerVisibility);

  useEffectOnce(() => {
    setSpinnerVisibility(true);
  });

  if (!localPlayer) return <ErrorView />;

  return (
    <BottomButtonWrapper>
      <Timer title={text.powerUps.settingItUp} />
      <MatchHeading
        headingOne={text.powerUps.getYourPowerUps}
        headingTwo={text.param.powerUpsHiddenMoves(localPlayer.username)}
        wordsToBold={[localPlayer.username]}
      />
      <ButtonReady />
    </BottomButtonWrapper>
  );
};
