import { FC, ReactNode } from "react";
import { text } from "../../../assets";
import { color, fontSizes, fontWeights, lineHeights, margins } from "../../../design";
import { HistoryRoundEndAction, HistoryRoundPlayer, PlayerPublic } from "../../../types";
import { getDieColor } from "../../../util";
import { WinnerBadge, LoserBadge, PlayerDeadBadge } from "../../badges";
import { Die } from "../../die";
import { PowerUpIcon } from "../../icons";
import { DiceIconWrapper, Lightning } from "../../icons/styles";
import { MatchStateContainer } from "../../match-players-overview/styles";
import { EndOfRoundRow, HistoryActionWrapper, HistoryBadgeContainer, HistoryBadgeWrapper, InfoRow } from "./styles";
import { PlayerInfoText, GeneralText } from "../../atoms";

interface Props {
  headingOne: string;
  headingOneColor?: string;
  headingTwo?: ReactNode;
  headingTwoColor?: string;
  isDice?: boolean;
  diceAmount?: number;
  powerUpAmount?: number;
  isPowerUp?: boolean;
  faceColor?: string;
}

export const HistoryActionTitle: FC<Props> = ({
  headingOne,
  headingTwo,
  headingOneColor,
  headingTwoColor,
  isDice,
  powerUpAmount,
  diceAmount,
  isPowerUp,
  faceColor,
}) => {
  const textPowerUpAmount = powerUpAmount && powerUpAmount > 0 ? text.param.plusAmount(powerUpAmount) : powerUpAmount;

  return (
    <HistoryActionWrapper>
      <PlayerInfoText fontWeight={fontWeights.light} customColor={headingOneColor}>
        {text.param.appendColon(headingOne)}
      </PlayerInfoText>
      {!isDice && !isPowerUp && (
        <PlayerInfoText fontWeight={fontWeights.light} customColor={headingTwoColor}>
          {headingTwo}
        </PlayerInfoText>
      )}
      {isDice && (
        <InfoRow>
          <Die faceColor={faceColor} isMatchHistory={true} />
          <PlayerInfoText fontWeight={fontWeights.light} customColor={headingTwoColor}>
            {text.param.plusAmount(diceAmount || 0)}
          </PlayerInfoText>
        </InfoRow>
      )}
      {isPowerUp && (
        <InfoRow>
          <Lightning />
          <PlayerInfoText fontWeight={fontWeights.light} customColor={headingTwoColor}>
            {textPowerUpAmount}
          </PlayerInfoText>
        </InfoRow>
      )}
    </HistoryActionWrapper>
  );
};

interface OutcomeProps {
  outcome: HistoryRoundPlayer;
  player: PlayerPublic;
  isLocalPlayer: boolean;
  actionName: HistoryRoundEndAction;
}

export const HistoryOutcome: FC<OutcomeProps> = ({ outcome, player, isLocalPlayer, actionName }) => {
  const amountResult =
    outcome.isWinner || actionName === "leftMatch"
      ? text.param.xAmount(outcome.playerStats.diceAmount)
      : text.param.endOfTurnResult(outcome?.playerStats.diceAmount);
  const faceColor = getDieColor(player);
  const isPlayerDead = player.status === "lost" && actionName === "leftMatch";

  const getPlayerBadge = () => {
    if (isPlayerDead) return <PlayerDeadBadge />;
    if (outcome?.isWinner) return <WinnerBadge />;
    return <LoserBadge />;
  };

  return (
    <HistoryBadgeWrapper customBackground={color.opaqueGrey}>
      <HistoryBadgeContainer isHeader>
        <PlayerInfoText>{text.param.usernameTitle(player.username, isLocalPlayer)}</PlayerInfoText>
        <MatchStateContainer>
          <DiceIconWrapper>
            <Die size={margins.small4} faceColor={faceColor} />
            <PlayerInfoText fontWeight={fontWeights.light} transformText="none" customColor={color.darkGrey}>
              {amountResult}
            </PlayerInfoText>
          </DiceIconWrapper>
          <PowerUpIcon
            fontSize={fontSizes.playerInfo}
            lineHeight={lineHeights.playerInfo}
            customColor={color.darkGrey}
            powerUpAmount={outcome?.playerStats.powerUpsAmount || 0}
          />
        </MatchStateContainer>
      </HistoryBadgeContainer>
      {getPlayerBadge()}
    </HistoryBadgeWrapper>
  );
};

interface EndOfRoundHistoryListProps {
  playerName: string;
  diceAmount: number;
  diceValues?: number[];
  powerUpAmount: number;
}

export const EndOfRoundHistoryList: FC<EndOfRoundHistoryListProps> = ({ playerName, diceAmount, powerUpAmount, diceValues }) => {
  return (
    <EndOfRoundRow>
      <PlayerInfoText>{playerName}</PlayerInfoText>
      <GeneralText customColor={color.mediumGrey}>{text.param.playerDice(diceAmount, diceValues)}</GeneralText>
      <PowerUpIcon powerUpAmount={powerUpAmount} customColor={color.mediumGrey} />
      <GeneralText customColor={color.mediumGrey}>{text.history.closingBracket}</GeneralText>
    </EndOfRoundRow>
  );
};
