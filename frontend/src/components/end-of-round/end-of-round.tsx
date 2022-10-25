import { FC } from "react";
import { text } from "../../assets";
import { BottomButtonWrapper, Heading1 } from "../atoms";
import { PrimaryButton } from "../buttons";

interface Props {
  matchStageReady: () => void;
}

// TODO: finish component
export const EndOfRound: FC<Props> = ({ matchStageReady }) => {
  return (
    <BottomButtonWrapper>
      <Heading1>{text.match.endOfMatch}</Heading1>
      <PrimaryButton text={text.match.newMatch} onClick={() => matchStageReady()} />
    </BottomButtonWrapper>
  );
};