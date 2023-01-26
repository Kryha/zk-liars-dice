import { activePlayerTurnData, text } from "../../assets";
import { color } from "../../design";
import { useStore } from "../../store";
import { Heading2 } from "../atoms";
import { GoBackButton } from "../buttons";
import { Timer } from "../timer";
import { TurnActionHeaderWrapper, TurnActionHeading } from "./styles";

export const TurnActionHeader = () => {
  const setTurnActionStep = useStore((state) => state.setTurnActionStep);
  const action = useStore((state) => state.action);
  const turnActionStep = useStore((state) => state.turnActionStep);
  const round = useStore((state) => state.round);
  const matchSettings = useStore((state) => state.matchSettings);

  const headerData = activePlayerTurnData(action, turnActionStep, round, matchSettings?.healPowerUpAmount);

  return (
    <TurnActionHeaderWrapper isBackButtonVisible={turnActionStep === "proceedWithAction"}>
      <GoBackButton text={text.playerTurn.back} onClick={() => setTurnActionStep("pickAction")} />
      {turnActionStep === "evaluateWinner" ? (
        <TurnActionHeading>{headerData.timerTitle}</TurnActionHeading>
      ) : (
        <Timer title={headerData.timerTitle} />
      )}
      <Heading2>{headerData.headingTitle}</Heading2>
      <Heading2 customColor={color.darkGrey}>{headerData.subHeadingTitle}</Heading2>
    </TurnActionHeaderWrapper>
  );
};
