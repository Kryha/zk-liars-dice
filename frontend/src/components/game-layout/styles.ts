import styled from "@emotion/styled";

import { color, margins } from "../../design";

interface ContentProps {
  isStageWithHUD: boolean;
}

export const MainContentContainer = styled.div<ContentProps>`
  overflow: scroll;
  border-right: 1px solid ${color.mediumGrey};
  left: 12.5vw;
  position: absolute;
  width: 62.5vw;
  height: ${({ isStageWithHUD }) => (isStageWithHUD ? "89vh" : "100vh")};
`;

export const ContentContainer = styled.div`
  margin-left: 1px;
  margin-top: ${margins.large0};
`;
