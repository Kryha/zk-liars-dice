import styled from "@emotion/styled";

import { color } from "../../design";

export const BaseLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;

export const LeftSection = styled.section`
  border-right: 1px solid ${color.mediumGrey};
  width: 12.5vw;
  height: 100vh;
`;

export const MainSection = styled.section`
  height: 100vh;
  width: 62.5vw;
`;

export const RightSection = styled.section`
  border-left: 1px solid ${color.mediumGrey};
  width: 25vw;
  height: 100vh;
`;