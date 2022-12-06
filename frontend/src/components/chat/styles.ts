import styled from "@emotion/styled";
import { CloseIcon } from "../../assets/icons";
import { color, margins } from "../../design";

interface LayoutProps {
  isToggled: boolean;
  isInMatch: boolean;
}

export const ChatSection = styled.section<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${margins.small1};
  height: 40vh;
  width: 25vw;
  border-left: ${({ isInMatch }) => (isInMatch ? `1px solid ${color.mediumGrey}` : "none")};
  display: ${({ isToggled }) => !isToggled && "none"};
`;

export const Close = styled(CloseIcon)``;

export const ChatHeadingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${margins.small4} ${margins.small4} 0px;
  gap: ${margins.small1};
  cursor: pointer;
  width: -webkit-fill-available;
`;
