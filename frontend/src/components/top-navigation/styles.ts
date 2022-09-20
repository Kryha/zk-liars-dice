import styled from "@emotion/styled";

import { TimerIcon } from "../../assets/icons";
import { color, margins, zIndex } from "../../design";
import { Heading6, ListItem, Paragraph } from "../atoms";
import { Link } from "../buttons";

export const TopNavigationSection = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  z-index: ${zIndex.onTop};
`;

export const Divider = styled.div`
  height: 50px;
  width: 1px;
  background: ${color.mediumGrey};
`;

export const Timer = styled(TimerIcon)`
  margin-top: 2px;
`;

interface TimerProps {
  isHovered: boolean;
}

export const CountdownTimer = styled.div<TimerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13.4px ${margins.small3} 13.4px ${margins.small2};
  gap: ${margins.small0};
  height: 100%;
  :hover {
    background: ${color.darkGrey};
  }
  ${Paragraph} {
    color: ${({ isHovered }) => isHovered && `${color.mediumGrey}`};
  }
  ${Timer} {
    path {
      fill: ${({ isHovered }) => isHovered && `${color.mediumGrey}`};
    }
  }
`;

export const DropdownContainer = styled.div``;

export const DropdownWrapper = styled.div`
  background: ${color.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
`;

interface DropdownProps {
  isHidden: boolean;
}

export const ChildrenContainer = styled.div<DropdownProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  display: ${({ isHidden }) => isHidden && "none"};
`;

export const RulesContainer = styled.div`
  padding: 20px;
`;

export const RulesSection = styled.div`
  margin-bottom: 60px;
`;

export const RulesSectionTitle = styled(Heading6)`
  text-transform: uppercase;
  margin-bottom: ${margins.small1};
`;

export const RulesSectionContent = styled(ListItem)``;

export const RulesList = styled.ol`
  ${RulesSectionContent}:not(:last-child) {
    margin-bottom: ${margins.small2};
  }
  margin-bottom: ${margins.small1};
`;

export const RulesLink = styled(Link)``;
