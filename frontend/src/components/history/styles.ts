import styled from "@emotion/styled";
import { CloseIcon } from "../../assets/icons";
import { color, margins } from "../../design";

interface LayoutProps {
  isChatToggled: boolean;
  isToggled: boolean;
  isInMatch: boolean;
}

export const HistorySection = styled.section<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${margins.small1};
  height: ${({ isChatToggled }): string => (isChatToggled ? "47vh" : "81.9vh")};
  width: 25vw;
  border-top: 1px solid ${color.mediumGrey};
  border-bottom: 1px solid ${color.mediumGrey};
  border-left: ${({ isInMatch }) => (isInMatch ? `1px solid ${color.mediumGrey}` : "none")};
  display: ${({ isToggled }) => !isToggled && "none"};
`;

export const Close = styled(CloseIcon)``;

export const HistoryHeadingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${margins.small4} ${margins.small4} 0px;
  gap: ${margins.small1};
  cursor: pointer;
  width: -webkit-fill-available;
`;
