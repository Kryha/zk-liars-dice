import styled from "@emotion/styled";
import { MAX_POWER_UP_VIEW_AMOUNT } from "../../constants";

interface WrapperProps {
  powerUpsAmount: number;
}

export const PowerUpListOverviewWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ powerUpsAmount }) =>
    powerUpsAmount < 4 ? `repeat(${powerUpsAmount},${Math.floor(100 / powerUpsAmount)}%)` : "repeat(4, 25%)"};
  min-height: 73vh;
  justify-content: ${({ powerUpsAmount }) => (powerUpsAmount <= MAX_POWER_UP_VIEW_AMOUNT ? "center" : "flex-start")};
  align-items: center;
`;
